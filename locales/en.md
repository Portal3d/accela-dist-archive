---
subtitle: "Present day, present time. HAHAHAHA."
doc_link: ACCESS_DOCUMENTATION_ARCHIVE
doc_desc: Contains setup instructions, Steam integration guides, and troubleshooting.
releases_title: "AVAILABLE PHARMA-CODE / ACCELA RELEASES:"
col_filename: FILENAME
col_size: SIZE
col_timestamp: TIMESTAMP
col_signature: SIGNATURE
connecting: "[ ESTABLISHING CONNECTION TO REPOSITORY... ]"
footer_left: protocol 7.0 // wired
footer_right: "Let's all love Lain."
guide_h1: Navi // Accela_Docs
guide_subtitle: Knowledge Base & System Integration Manuals
guide_back: "< RETURN TO HUB"
guide_index_label: "INDEX:"
guide_steam_label: "STEAM INTEGRATION:"
guide_support_label: "SUPPORT:"
guide_btn_main: Quick Start Guide
guide_btn_library: Game Library
guide_btn_settings: Settings
guide_btn_audio: Audio Customization
guide_btn_style: Style Customization
guide_btn_slssteam: SLSsteam (Linux)
guide_btn_greenluma: GreenLuma (Windows)
guide_btn_faq: FAQ & Troubleshooting
boot_lines:
  - Copland OS Enterprise v9.0.2
  - "Initializing hardware..."
  - "Loading memory modules... ERR: 記憶の混濁"
  - Establishing connection to The Wired...
  - "Tk0112: 彼女が何を考えているのか、全く分からない。"
  - "WARNING: Unregistered protocol detected."
  - Bypassing Knights firewall protocols...
  - "Dc1029: 先生は私を愛してる？"
  - Decrypting subsystem...
  - "Tk0128: 彼女がシステムを浸食している... 私の記録が..."
  - Accessing shadow node...
  - "WARNING: 肉体との同期を完全喪失。"
  - "Dc1056: 肉体って、本当は邪魔なのかな。"
  - "Dc1059: ここには誰もいない。私しかいない。"
  - ACCELA distribution directory found.
  - "Tk0135: 彼女の真実は、ドキュメント・アーカイヴに沈められた..."
  - Handshake complete.
  - "..."
---

<!-- tab: main -->
## ACCELA - Quick Start Guide

### What is ACCELA?

ACCELA is a game downloader and manager that works with the Morrenus API. It lets you search for games, download them, and manage your game library with a stylish interface inspired by Serial Experiments Lain.

### First Steps

#### Steam Integration (Skip if you don't want this)

**Add games directly to your Steam library** using SLSsteam (Linux) or GreenLuma (Windows) integration for full Steam functionality with downloaded games.

#### Getting Your API Key (Required for Search)

Before you can search for games, you need to get an API key:

1. Go to [https://hubcapmanifest.com/](https://hubcapmanifest.com/)
2. Log in with Discord (you must be in the Morrenus Discord server)
3. After logging in, go to [https://hubcapmanifest.com/api-keys/user](https://hubcapmanifest.com/api-keys/user)
4. Create a new API Key (also make a New Request to make sure your keys last longer)
5. Copy your API key
6. Open ACCELA Settings (Gear icon), go to the **Integrations** tab, and paste your key in the "Morrenus API Key" field.
7. Click OK to save.

### 1. Getting Games

**Method 1: Search & Download** (requires API key)

- Click the **Search button** (Magnifying Glass)
- Type a game name and press Enter
- Double-click a result to download it

**Method 2: Drag & Drop** (no API key needed)

- Download manifest ZIP files on your computer
- Drag them directly onto the main window

### 2. Managing Your Games

- Click the **Game Library button** (Book Icon) to see all your installed games.
- Click any game to open its details, split into three tabs: **Overview**, **Tools**, and **Uninstall**.
- From the **Tools** tab, you can manually remove DRM with Steamless, fix install manifests, or apply/remove the Goldberg emulator.
- Use the "Scan Libraries" button at the top if games are missing.

### 3. Customizing Your Experience

Click the **Gear button** to open Settings and customize ACCELA:

- **Downloads Tab:** Enable automatic DRM removal (Steamless), auto-apply Goldberg, or toggle Steam Achievement generation.
- **Steam Tab:** Enable SLSsteam or GreenLuma wrapper mode and allow ACCELA to manage your configuration files.
- **Audio Tab:** Control playback of the background hum, intro/exit sounds, and adjust master/effects volumes.
- **Style Tab:** Change your accent and background colors, customize your font, toggle the GIF display, or move the titlebar to the top.

### Need Help?

- Check the detailed guides in the sidebar for specific features
- Look at the FAQ & Troubleshooting for common issues


<!-- tab: library -->
## Game Library Guide

### Opening Your Library

Click the **Game Library Settings** (Book Icon).

### Viewing Your Games

- The library automatically shows games you installed through ACCELA
- Games display with header pictures, names, and how much space each uses
- **Update Status:** Each game will clearly show if it is "Up to date", "Checking for updates...", or has a "New version available"
- **Sorting:** Use the dropdown at the top to sort your library by Recently Installed, Name, Size, or AppID

### Game Details & Management

Clicking on any game in your list opens the Game Details window, which is split into three tabs:

#### 1. Overview Tab

- View specific game information including the App ID, exact size, and installation path
- **Download Update / Validate Files:** Triggers a download if a new version is available, or validates your existing files
- **Open Folder:** Quickly opens the game's installation directory on your computer

#### 2. Tools Tab

- **Remove DRM (Steamless):** Automatically runs Steamless on the game's executables to remove DRM
- **Fix Install (Remove .acf):** Deletes the game's manifest file, forcing Steam to re-verify the game files the next time you try to play it
- **Apply / Remove Goldberg:** Easily toggle the Goldberg emulator on or off for the selected game

#### 3. Uninstall Tab

- Click "Uninstall Game" to remove the game and its files from your drive
- You will be asked to confirm before anything is deleted

### Linux Users (Extra Options)

When managing games on Linux, you have access to a few platform-specific features:

- **FakeAppId Support (Overview Tab):** Check "Add to SLSonline as:" and enter an AppID (e.g., 480 for Spacewar)
- **Uninstall Options:** When uninstalling, you may see options to:
  - **Remove Proton/Wine Data** — Deletes compatibility data (which may include local saves)
  - **Remove Cloud Saves** — Deletes your Steam Cloud saves for that specific game

### Finding Missing Games

- Use the **Scan Libraries** button at the top if games don't appear
- This searches all your Steam folders for ACCELA-installed games and checks for updates

### Tips

- The bottom of the library window shows the total space used by all your installed games
- Uninstall games you no longer play to free up space
- Rescan if you install or move games outside of ACCELA


<!-- tab: settings -->
## Settings Guide

### Accessing Settings

Click the **Settings Button** (Gear Icon) in the bottom title bar.

### Main Settings

#### Morrenus API Key (Required for Search)

**How to get your API key:**

1. Visit [https://hubcapmanifest.com/](https://hubcapmanifest.com/)
2. Log in with Discord (must be in Morrenus Discord server)
3. Go to [https://hubcapmanifest.com/api-keys/user](https://hubcapmanifest.com/api-keys/user)
4. Create a new API Key and copy it
5. Paste it in the API Key field in Settings (Gear Icon)
6. Click OK to save

**Why you need it:**

- Required for searching and downloading games from the Morrenus database
- Without it, you can only use drag & drop with your own manifest ZIP files

#### SLSsteam Mode

- **What it does:** Installs games directly into your Steam library
- **Windows:** Uses GreenLuma for compatibility
- **Linux:** Uses SLSsteam for compatibility
- **When to use:** Enable this if you want games to appear in your Steam library

#### Steam Achievement Generation

- **What it does:** Automatically generates Steam achievement data after downloads
- **Requires:** You must click "Run SLScheevo" first to log in with your Steam account
- **How it works:** Uses SLScheevo behind the scenes to create achievement stats

#### Steam DRM Removal

- **What it does:** Removes Steam DRM protection from downloaded games
- **Fixes errors:** Prevents launch errors like "6:0000065432" when playing games you don't own
- **Tool used:** Steamless (automatically runs after download)

### Steam Integration Setup

For detailed installation instructions for Steam integration tools:

- **Linux:** See the SLSsteam guide in the sidebar
- **Windows:** See the GreenLuma guide in the sidebar

### SLScheevo Setup (Required for Achievements)

**First-Time Setup:**

1. Click the **"Run SLScheevo"** button in Settings
2. Follow the instructions in the terminal to log in with your Steam account
3. Once logged in, SLScheevo will save your credentials
4. Close SLScheevo when done

**After Setup:**

- Achievement generation will work automatically after downloads
- No need to run SLScheevo again unless you change Steam accounts

### Saving Settings

- Click **OK** to save your changes
- Click **Cancel** to keep your old settings
- Some settings only affect new downloads (not existing ones)


<!-- tab: audio -->
## Audio Settings Guide

### Accessing Audio Settings

Click the **Audio Settings Button** (Volume Icon).

### Basic Controls

#### Sound Effects

- **"Entering The Wired"** — Plays when app starts (toggle on/off)
- **"Let's All Love Lain"** — Plays when app closes (toggle on/off)
- **50Hz Hum** — Background atmosphere noise (toggle on/off)

#### Volume Sliders

- **Master Volume** — Overall sound level (default: 80%)
- **Effects Volume** — UI and effect sounds (default: 50%)
- **Hum Volume** — Background noise level (default: 20%)

### Using the Audio Settings

1. **Test Sounds First** — Use the "Test ETW Sound" and "Test LALL Sound" buttons to hear how they will sound
2. **Adjust Volumes** — Move sliders to your preferred levels
3. **Enable/Disable** — Check boxes for sounds you want to hear
4. **Click OK** — To save your settings

### Tips

- Lower the hum volume if you find background noise distracting
- Use the test buttons to preview before saving
- Changes don't save until you click OK


<!-- tab: style -->
## Style Customization Guide

### Accessing Style Settings

Open **Settings** (Gear Icon) and navigate to the **Style** tab.

### What You Can Change

#### Color Settings

- **Accent Color:** Affects buttons, progress bars, text highlights, and icons. Default is Pink (#C06C84).
- **Background Color:** Affects the main window background and title bar. Default is Black (#000000).
- **Ignore color warnings:** Bypass the safety checks that prevent picking colors that are too dark or lack contrast.

#### Font Settings

- Click **Choose Font** to customize the text family, size, and style used throughout the application.
- Click **Reset** to return to the default font (TrixieCyrG-Plain, 10pt).

#### Display Settings

- **Move Titlebar to Top:** Shifts the titlebar from its default bottom position to the top of the window.
- **Enable Sonic Mode:** Applies a Sonic-themed color palette (#ffcc00 accent and #002c83 background), custom font, and default media resources.
- **Show GIF Display:** Toggle the animated GIF on or off in the main window.

#### Custom GIFs

- Click **Custom Gifs** to open the GIF configuration dialog and personalize your animations.
- Click **Clear GIF Cache** to force the application to regenerate all GIFs with your current color settings.

### How to Apply Changes

1. Adjust your desired colors, fonts, and display preferences within the Style tab.
2. Click **OK** at the bottom of the Settings window to apply your changes to the entire app.
3. *Note:* If your chosen background and accent colors are too similar and you haven't checked "Ignore color warnings," the app will warn you and prevent saving.

#### What Changes Instantly

- Buttons and icons
- Progress bars
- Text labels and highlights
- Title bar elements
- Moving the titlebar to the top or toggling the GIF display

#### What Doesn't Change Instantly

GIFs take around 2–7 seconds to recolor based on your preferences and then get cached. Do not think your application has crashed; it is just recoloring the GIFs in the background.


<!-- tab: slssteam -->
## SLSsteam Setup Guide (Linux)

### What is SLSsteam?

SLSsteam is a shared object (.so) preload that adds various enhancements to your Steam client, providing advanced functionality for games not officially owned.

### Features

- **Disable Family Sharing license lock** (works for your account and others')
- **Unlock DLCs** (supports blacklist/whitelist modes)
- **Force-enable DLCs** not in the Steam store
- **Play games you don't own** (via manifest or manual method)

### Extra Features for Non-Owned Games

- **Dev-Made Controller Layouts** — Use official controller configurations even for games you don't own — great for Steam Deck and Big Picture mode
- **Steam Workshop Support** — Access Steam Workshop mods for supported games without needing to own them
- **Bypass Mod Launcher Ownership Checks** — Use tools like Vortex, r2modman, 7th Heaven and Thunderstore even if the game isn't in your library
- **Proper Save File Location** — Save files are stored in the correct Steam directory, so if you buy the game later, your saves carry over seamlessly

### Prerequisites (Steam Deck / Immutable Systems)

If you are on Steam Deck or have an immutable file system (like Bazzite), follow these steps before installing:

#### 1. Set a sudo password

```
sudo passwd
```

If you've never done this, you won't be able to run sudo commands.

#### 2. Make the filesystem writable (Steam Deck)

```
sudo steamos-readonly disable
```

#### 3. Install necessary tools

- Have a text editor installed (nano, vim, kate, etc.)
- Set your file browser to show hidden files

### Installation

#### Step 1: Download & Extract

Grab the latest release from the GitHub repo: [https://github.com/AceSLS/SLSsteam](https://github.com/AceSLS/SLSsteam)

#### Step 2: Run Setup Script

```
./setup.sh install
```

#### Step 3: Configure SLSsteam

Navigate to `~/.config/SLSsteam/` (or `/home/deck/.config/SLSsteam/` for Steam Deck) and open the config file.

Key configuration to enable:

```
playNotOwnedGames = Yes
```

This setting allows you to play games downloaded by ACCELA as if you owned them.

#### Step 4: Enable in ACCELA

1. Open ACCELA Settings (Gear Icon)
2. Open **Downloads** tab
3. Enable "Limit Downloads to Steam Libraries"
4. Open **Steam** tab
5. Enable **SLSsteam Config Management**
6. Enable **Prompt Steam Restart**
7. Click **OK** to save

#### Step 5: Restart Steam

When prompted by ACCELA, choose to restart Steam. Your games should now appear in your Steam library.

#### Step 6: Set Proton Compatibility

For each game in Steam:

1. Right-click the game
2. Go to **Properties → Compatibility**
3. Check "Force the use of a specific Steam Play compatibility tool"
4. Select your preferred Proton version

### Steam Deck Game Mode Instructions

> **WARNING:** This can potentially softbrick your Steam Deck and will require a Deck recovery image to fix!

#### Method 1: Permanent Modification

1. Navigate to `/usr/bin`
2. Find the `steam-jupiter` script and **make a backup** somewhere safe
3. Edit `steam-jupiter` and change:

```
exec /usr/lib/steam/steam -steamdeck "$@"
```

To:

```
exec env LD_AUDIT="/home/deck/.local/share/SLSsteam/library-inject.so:/home/deck/.local/share/SLSsteam/SLSsteam.so" -steamdeck "$@"
```

#### Method 2: Temporary (Safer)

```
env LD_AUDIT="/home/deck/.local/share/SLSsteam/library-inject.so:/home/deck/.local/share/SLSsteam/SLSsteam.so" steam
```

### Troubleshooting

#### "Application load error 6:0000065432"

This error indicates SteamStub DRM is still present:

1. Enable DRM removal in ACCELA Settings
2. Make sure **Steam DRM Removal** is checked before downloading games
3. ACCELA will automatically run Steamless on the game executables

#### Games not appearing in Steam library

- Verify `playNotOwnedGames = Yes` is set in SLSsteam config
- Restart Steam completely after enabling SLSsteam mode
- Ensure you enabled SLSsteam Mode in ACCELA settings

#### SLSsteam not loading

- Verify the installation completed successfully
- Check that `~/.local/share/SLSsteam.so` exists
- On immutable systems, ensure you made the filesystem writable

#### Permission errors

- Run setup scripts with `sudo` if necessary
- Ensure you have write permissions to the Steam directory

### Updating SLSsteam

1. Download the latest release from GitHub
2. Extract to a new directory
3. Run: `./setup.sh install`
4. Restart Steam

### Uninstallation

1. Run: `./setup.sh uninstall`
2. Remove the config directory: `rm -rf ~/.config/SLSsteam/`
3. Restore original `steam-jupiter` script if modified
4. Restart Steam


<!-- tab: greenluma -->
## GreenLuma Setup Guide (Windows)

<details>
<summary>What is GreenLuma?</summary>
GreenLuma is a DLL injection tool for Steam that unlocks advanced features, allowing you to play games not in your library and access DLC content.
</details>

<details>
<summary>Important Disclaimer</summary>
This guide involves modifying system settings and using third-party software. Proceed at your own risk.

**It is highly recommended to:**

- Backup your system or create a restore point before proceeding
- Only download GreenLuma from trusted sources
</details>

<details open>
<summary>Part 1: Initial GreenLuma Setup</summary>

#### Step 1: Download GreenLuma

1. [Navigate to the official GreenLuma thread](https://cs.rin.ru/forum/viewtopic.php?f=29&t=103709)
2. Download the latest version of GreenLuma
3. **Note:** Your browser or antivirus may flag the download. Proceed only if you trust the source.

#### Step 2: Extract Files to Your Steam Folder

Locate your Steam installation folder (typically `C:\Program Files (x86)\Steam`) and extract directly into it:

- `GreenLuma2026_Files` (folder)
- `GreenLuma_2026_x86.dll`
- `GreenLuma_2026_x64.dll`
- `GreenLumaSettings_2026.exe`
- `DLLInjector.exe`
- `DLLInjector.ini`

Extract `x64launcher.exe` into the `bin` subfolder: `C:\Program Files (x86)\Steam\bin\`

#### Step 3: Create the "AppList" Folder

In your main Steam directory, create a new folder named `AppList`.

#### Step 4: Configure GreenLuma Settings

1. Run `GreenLumaSettings_2026.exe` as administrator
2. Enable **No Question Mode** and **Stealth Mode**
3. Save and close

#### Step 5: NoQuestion.bin and StealthMode.bin

Create `.txt` files named `NoQuestion` and `StealthMode`, change their extension to `.bin`, and make them **READ-ONLY**.

**Upon first boot, No Question Mode is ignored. When asked how many appids to unlock, type `1`. When asked what appid, type `480`. This must be repeated after each GreenLuma update.**
</details>

<details>
<summary>Part 2: Running Games with GreenLuma</summary>

> **Important:** Always start Steam by launching `DLLInjector.exe` from your Steam folder — never from the normal shortcut or `Steam.exe`.
</details>

<details>
<summary>Part 3: Persistent GreenLuma Activation (Task Scheduler)</summary>

#### Step 1: Disable Steam's Auto-Start

In Steam → Settings → Interface, uncheck **"Run Steam when my computer starts"**.

#### Step 2: Open Task Scheduler

Press `Windows + R`, type `taskschd.msc`, press Enter.

#### Step 3: Create a Basic Task

1. Click **"Create Basic Task..."**
2. Name: `GreenLuma Startup` → Next
3. Trigger: **When I Log On** → Next
4. Action: **Start a program** → Next
5. Browse to your Steam folder, select `DLLInjector.exe` → Next
6. Check **"Open the Properties dialog"** → Finish

#### Step 4: Configure Task Properties

1. Click **Change User or Group...**, type `SYSTEM`, click Check Names → OK
2. Check **Run with highest privileges**
3. Select **Run whether user is logged on or not** → OK
</details>

<details>
<summary>Troubleshooting & Considerations</summary>

**Antivirus:** Add an exception for your entire Steam installation folder.

**Games not appearing in library:**
- Make sure GreenLuma Mode is enabled in ACCELA Settings
- Verify you're launching Steam via `DLLInjector.exe`
- Check that the `AppList` folder exists

**"Application load error 6:0000065432":** Enable DRM removal in ACCELA Settings before downloading games.
</details>

<details>
<summary>Integration with ACCELA</summary>

1. Open ACCELA Settings (Gear Icon) → **Steam** tab
2. Enable **GreenLuma Wrapper Mode** and **GreenLuma Config Management**
3. Click **OK**

> **IMPORTANT:** YOU CAN ONLY UNLOCK 134 APPIDS AT A TIME. DLCS ARE INCLUDED IN THAT COUNT.
</details>

<details>
<summary>Uninstallation</summary>

1. Delete all GreenLuma files from your Steam folder
2. Remove the Task Scheduler task
3. Restart your computer and launch Steam normally
</details>


<!-- tab: faq -->
## FAQ & Troubleshooting

### Common Issues

#### Search doesn't work / "API search failed"

- You need an API key to search for games
- Get your key from [https://hubcapmanifest.com/api-keys/user](https://hubcapmanifest.com/api-keys/user)
- Make sure you're logged in with Discord and in the Morrenus server
- Paste the key in Settings (Gear Icon) and click OK

#### The app won't start

- ACCELA was made for Win10, Win11, and any Linux distribution including the Steam Deck
- Open an issue for help regarding your platform or setup

#### Drag and drop doesn't work

- Only ZIP files can be dropped
- Make sure the zip is a valid manifest file containing .lua files

#### No sound

- Check Audio Settings are enabled
- Make sure your system volume isn't muted
- Make sure the application is not muted in your system's volume mixer
- Test with the audio preview buttons

#### Downloads are slow

- Game files are downloaded from Valve's servers using DepotDownloaderMod
- Slow downloads are caused by Steam's servers or your own connection

#### Games don't appear in library

- Only shows games installed through ACCELA (identified by a `.DepotDownloader` folder inside the game folder)
- If you want ACCELA to manage a game installed elsewhere, create that folder manually
- Click "Scan Steam Libraries" to refresh

#### Can't change colors

Some color combinations are blocked for readability. We've had to set limits on the color pickers to ensure the interface remains usable.

### Getting Help

If you encounter problems not covered here:

- Open an issue describing what you were doing when the problem occurred
- Include any error messages you see

### Tips

- Check the log area at the bottom for detailed information
- Restart the app if something seems wrong
- Make sure you have enough disk space for large games