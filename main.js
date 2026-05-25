// Page detection — relies on body classes set in HTML
const IS_INDEX = document.body.classList.contains('page-index');
const IS_GUIDE = document.body.classList.contains('page-guide');
// i18n
let currentLang  = 'en';
let translations = {};
let tabContents  = {};
// Parse YAML-ish front matter between --- delimiters.
// Handles flat key: value pairs and indented list items (boot_lines).
function parseFrontMatter(raw) {
    const meta  = {};
    const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!match) return { meta, body: raw };
    const block = match[1];
    const body  = raw.slice(match[0].length);
    let currentKey = null;
    for (const line of block.split('\n')) {
        // Indented list item:  - "value" or  - value
        const listItem = line.match(/^\s{2}-\s+"?(.*?)"?\s*$/);
        if (listItem && currentKey) {
            if (!Array.isArray(meta[currentKey])) meta[currentKey] = [];
            meta[currentKey].push(listItem[1]);
            continue;
        }
        // key: "value" or key: value
        const kv = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
        if (kv) {
            currentKey = kv[1];
            meta[currentKey] = kv[2] || null;
        }
    }
    return { meta, body };
}
// Split markdown body into sections by <!-- tab: id --> comments
function parseTabSections(body) {
    const tabs  = {};
    const parts = body.split(/<!--\s*tab:\s*(\w+)\s*-->/);
    for (let i = 1; i < parts.length; i += 2) {
        tabs[parts[i]] = parts[i + 1] || '';
    }
    return tabs;
}
// Fetch and parse a locale .md file, then apply to the page
async function loadLanguage(lang) {
    try {
        const res = await fetch(`./locales/${lang}.md`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw = await res.text();
        const { meta, body } = parseFrontMatter(raw);
        translations = meta;
        tabContents  = parseTabSections(body);
        // Commit language only after a successful load
        currentLang = lang;
        localStorage.setItem('lang', lang);
        applyTranslations();
        if (IS_GUIDE) renderTabContents();
    } catch (e) {
        console.warn(`Could not load language: ${lang}`, e);
    }
}
// Apply translation strings to all [data-i18n] elements
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key   = el.dataset.i18n;
        const value = translations[key];
        if (!value || Array.isArray(value)) return;
        if (el.classList.contains('glitch-link')) el.dataset.text = value;
        el.textContent = value;
    });
}
// Select a specific language and update the active button indicator
function selectLang(lang) {
    if (lang === currentLang) return;
    loadLanguage(lang).then(() => updateLangButtons());
}
// Highlight the button matching the current language
function updateLangButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('onclick') === `selectLang('${currentLang}')`);
    });
}
// Detect preferred language from storage or browser
function detectLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    return navigator.language.startsWith('pt') ? 'pt-BR' : 'en';
}
// Guide — render markdown tab contents
const TAB_IDS = ['main', 'library', 'settings', 'audio', 'style', 'slssteam', 'greenluma', 'faq'];
// Nav-link config for each tab
const TAB_NAV = {
    library:   { back: 'main' },
    settings:  { back: 'main' },
    audio:     { back: 'main' },
    style:     { back: 'main' },
    slssteam:  { back: 'main', next: 'settings' },
    greenluma: { back: 'main', next: 'settings' },
    faq:       { back: 'main' },
};
// Render all tab markdown sections into their respective divs
function renderTabContents() {
    TAB_IDS.forEach(id => {
        const el = document.getElementById(id);
        const md = tabContents[id];
        if (!el || !md) return;
        el.innerHTML = marked.parse(md);
        el.querySelectorAll('a[href^="http"]').forEach(a => a.setAttribute('target', '_blank'));
        // Wire up internal href="#tabId" links produced by marked
        el.querySelectorAll('a[href^="#"]').forEach(a => {
            const target = a.getAttribute('href').slice(1);
            if (TAB_IDS.includes(target)) {
                a.setAttribute('href', '#');
                a.addEventListener('click', e => { e.preventDefault(); openTab(target); });
            }
        });
        appendTabNavLinks(el, id);
    });
}
// Append back/next navigation at the bottom of a tab
function appendTabNavLinks(el, id) {
    const nav = TAB_NAV[id];
    if (!nav) return;
    const p = document.createElement('p');
    p.className = 'tab-nav-links';
    if (nav.back) {
        const a = document.createElement('a');
        a.href        = '#';
        a.textContent = '< Return to Quick Start Guide';
        a.addEventListener('click', e => { e.preventDefault(); openTab(nav.back); });
        p.appendChild(a);
    }
    if (nav.next) {
        p.appendChild(document.createTextNode(' | '));
        const a = document.createElement('a');
        a.href        = '#';
        a.textContent = 'Settings Guide';
        a.addEventListener('click', e => { e.preventDefault(); openTab(nav.next); });
        p.appendChild(a);
    }
    el.appendChild(p);
}
// Guide — show the selected tab and update sidebar active state
function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    const content = document.getElementById(tabId);
    const button  = document.getElementById('btn-' + tabId);
    if (content) content.classList.add('active');
    if (button)  button.classList.add('active');
    if (window.innerWidth <= 768) {
        document.querySelector('.content-area')?.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
// Index — typewriter boot sequence, reveals #main-interface when done
function runBootSequence(lines, screen, mainInterface) {
    let lineIndex = 0;
    function typeLine() {
        if (lineIndex >= lines.length) {
            setTimeout(() => {
                screen.style.display        = 'none';
                mainInterface.style.display = 'block';
            }, 800);
            return;
        }
        const lineEl    = document.createElement('div');
        screen.appendChild(lineEl);
        const text      = lines[lineIndex];
        let   charIndex = 0;
        const timer = setInterval(() => {
            lineEl.textContent += text.charAt(charIndex++);
            if (charIndex >= text.length) {
                clearInterval(timer);
                lineIndex++;
                setTimeout(typeLine, Math.random() * 300 + 100);
            }
        }, 15);
    }
    typeLine();
}
// Index — glitch text effect
const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
// Attach hover glitch scramble to all .glitch-link elements
function applyGlitchEffects() {
    document.querySelectorAll('.glitch-link').forEach(link => {
        let interval = null;
        link.addEventListener('mouseover', e => {
            const target   = e.currentTarget;
            const original = target.dataset.text || target.textContent;
            let   iteration = 0;
            clearInterval(interval);
            interval = setInterval(() => {
                target.textContent = original
                    .split('')
                    .map((_, i) => i < iteration
                        ? original[i]
                        : GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)])
                    .join('');
                iteration += 1 / 3;
                if (iteration >= original.length) clearInterval(interval);
            }, 30);
        });
        link.addEventListener('mouseleave', e => {
            clearInterval(interval);
            e.currentTarget.textContent = e.currentTarget.dataset.text || e.currentTarget.textContent;
        });
    });
}
// Index — populate the release table, merging hardcoded Windows asset with GitHub latest
async function fetchLatestReleases() {
    const tbody = document.getElementById('release-table-body');
    if (!tbody) return;
    const windowsAsset = {
        name:                 'ACCELA-20260417235509-windows-binary.zip',
        browser_download_url: 'https://bzzhr.to/hhc1x17q51vf',
        size:                 186000000,
        updated_at:           '2026-04-17T23:55:09Z',
        id:                   417235509,
    };
    try {
        const res  = await fetch('https://api.github.com/repos/ciscosweater/enter-the-wired/releases/latest');
        const data = await res.json();
        const assets = [windowsAsset, ...data.assets];
        tbody.innerHTML = '';
        assets.forEach(asset => {
            const sizeMB = (asset.size / (1024 * 1024)).toFixed(1) + ' MB';
            const date   = new Date(asset.updated_at).toISOString().replace('T', ' ').substring(0, 19);
            const sig    = Math.abs(asset.id).toString(16).substring(0, 4).toUpperCase().padStart(4, '0');
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><a href="${asset.browser_download_url}" target="_blank"
                        class="glitch-link" data-text="${asset.name}">${asset.name}</a></td>
                <td>${sizeMB}</td>
                <td>${date}</td>
                <td>0x${sig}...VALID</td>`;
            tbody.appendChild(tr);
        });
        applyGlitchEffects();
    } catch (err) {
        tbody.innerHTML = `<tr><td colspan="4"
            style="color:var(--alert-color);text-align:center;padding:2rem;">
            [ ERR: CONNECTION TO SHADOW NODE SEVERED ]</td></tr>`;
    }
}
// Start ambient audio, falling back to user interaction if blocked
function initAudio() {
    const bgm = document.getElementById('ambient-bgm');
    if (!bgm) return;
    bgm.volume = 0.4;
    bgm.play().catch(() => {
        const resume = () => {
            bgm.play();
            document.removeEventListener('click',   resume);
            document.removeEventListener('keydown', resume);
        };
        document.addEventListener('click',   resume);
        document.addEventListener('keydown', resume);
    });
}
// Cryptic console logs
function printCrypticLogs() {
    if (IS_INDEX) {
        console.log('%c 柊子先生、私は本物ですか？ ',                                      'color: rgba(227,134,149,0.2); font-size:12px;');
        console.log('%c Tk0134: レイン、どこにいるの？助けて... ',                          'color: rgba(227,134,149,0.15); font-size:11px;');
        console.log('%c 記録は書き換えられている... アーカイヴ（DOCUMENTATION）を調べて... ', 'color: rgba(227,134,149,0.05); font-size:10px;');
    }
    if (IS_GUIDE) {
        console.log('%c Present day, present time. HAHAHAHA. ',     'color:#e38695; font-size:16px; font-family:monospace;');
        console.log('%c protocol 7 connection established... ',      'color:#964d5c;');
        console.log('%c Dc1044: ワイヤードとリアルは、もう境界がないの。 ', 'color: rgba(227,134,149,0.2); font-size:11px;');
        console.log('%c Dc1066: HUBの右下... 境界の向こう側へ... ',        'color: rgba(227,134,149,0.1); font-size:10px;');
    }
}
// Entry point
window.addEventListener('DOMContentLoaded', async () => {
    printCrypticLogs();
    await loadLanguage(detectLanguage());
    if (IS_INDEX) updateLangButtons();
    initAudio();
    // Index-only
    if (IS_INDEX) {
        const bootScreen    = document.getElementById('boot-screen');
        const mainInterface = document.getElementById('main-interface');
        const gifs = [
            './downloading_lain1.gif',
            './downloading_lain2.gif',
            './downloading_lain3.gif',
            './downloading_lain4.gif',
            './downloading_lain5.gif',
            './downloading_lain6.gif',
            './downloading_lain7.gif',
            './downloading_lain11.gif',
            './main.gif'
        ];
        const dynBg = document.getElementById('dynamic-bg');
        if (dynBg) dynBg.style.backgroundImage = `url('${gifs[Math.floor(Math.random() * gifs.length)]}')`;
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('skipBoot') === 'true') {
            bootScreen.style.display    = 'none';
            mainInterface.style.display = 'block';
        } else {
            const bootLines = Array.isArray(translations.boot_lines)
                ? translations.boot_lines
                : [
                    'Copland OS Enterprise v9.0.2',
                    'Initializing hardware...',
                    'Loading memory modules... ERR: 記憶の混濁',
                    'Establishing connection to The Wired...',
                    'WARNING: Unregistered protocol detected.',
                    'Bypassing Knights firewall protocols...',
                    'Decrypting subsystem...',
                    'Accessing shadow node...',
                    'WARNING: 肉体との同期を完全喪失。',
                    'ACCELA distribution directory found.',
                    'Handshake complete.',
                    '...',
                ];
            runBootSequence(bootLines, bootScreen, mainInterface);
        }
        fetchLatestReleases();
    }
});
// Global exports (called via inline onclick in HTML)
window.selectLang = selectLang;
window.openTab    = openTab;