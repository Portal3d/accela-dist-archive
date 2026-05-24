---
subtitle: "Dia de hoje, hora de hoje. HAHAHAHA."
doc_link: ACESSAR_ARQUIVO_DE_DOCUMENTAÇÃO
doc_desc: Contém instruções de instalação, guias de integração com Steam e solução de problemas.
releases_title: "CÓDIGO-PHARMA DISPONÍVEL / LANÇAMENTOS ACCELA:"
col_filename: ARQUIVO
col_size: TAMANHO
col_timestamp: DATA
col_signature: ASSINATURA
connecting: "[ ESTABELECENDO CONEXÃO COM O REPOSITÓRIO... ]"
footer_left: protocolo 7.0 // cabeado
footer_right: "Vamos todos amar a Lain."
guide_h1: Navi // Accela_Docs
guide_subtitle: Base de Conhecimento & Manuais de Integração
guide_back: "< VOLTAR AO HUB"
guide_index_label: "ÍNDICE:"
guide_steam_label: "INTEGRAÇÃO STEAM:"
guide_support_label: "SUPORTE:"
guide_btn_main: Guia de Início Rápido
guide_btn_library: Biblioteca de Jogos
guide_btn_settings: Configurações
guide_btn_audio: Personalização de Áudio
guide_btn_style: Personalização Visual
guide_btn_slssteam: SLSsteam (Linux)
guide_btn_greenluma: GreenLuma (Windows)
guide_btn_faq: Perguntas Frequentes
boot_lines:
  - Copland OS Enterprise v9.0.2
  - "Inicializando hardware..."
  - "Carregando módulos de memória... ERR: 記憶の混濁"
  - Estabelecendo conexão com O Cabeado...
  - "Tk0112: 彼女が何を考えているのか、全く分からない。"
  - "AVISO: Protocolo não registrado detectado."
  - Contornando protocolos de firewall dos Knights...
  - "Dc1029: 先生は私を愛してる？"
  - Descriptografando subsistema...
  - "Tk0128: 彼女がシステムを浸食している... 私の記録が..."
  - Acessando nó sombra...
  - "AVISO: 肉体との同期を完全喪失。"
  - "Dc1056: 肉体って、本当は邪魔なのかな。"
  - "Dc1059: ここには誰もいない。私しかいない。"
  - Diretório de distribuição ACCELA encontrado.
  - "Tk0135: 彼女の真実は、ドキュメント・アーカイヴに沈められた..."
  - Handshake completo.
  - "..."
---

<!-- tab: main -->
## ACCELA - Guia de Início Rápido

### O que é o ACCELA?

O ACCELA é um gerenciador e downloader de jogos que funciona com a API Morrenus. Ele permite buscar jogos, baixá-los e gerenciar sua biblioteca com uma interface estilizada inspirada em Serial Experiments Lain.

### Primeiros Passos

#### Integração com Steam (Pule se não quiser)

**Adicione jogos diretamente à sua biblioteca Steam** usando a integração com SLSsteam (Linux) ou GreenLuma (Windows) para funcionalidade completa do Steam com jogos baixados.

#### Obtendo sua Chave de API (Necessária para Busca)

Antes de buscar jogos, você precisa de uma chave de API:

1. Acesse [https://hubcapmanifest.com/](https://hubcapmanifest.com/)
2. Entre com o Discord (você deve estar no servidor Discord do Morrenus)
3. Após entrar, acesse [https://hubcapmanifest.com/api-keys/user](https://hubcapmanifest.com/api-keys/user)
4. Crie uma nova Chave de API (crie também uma Nova Solicitação para garantir que suas chaves durem mais tempo)
5. Copie sua chave de API
6. Abra as Configurações do ACCELA (ícone de engrenagem), vá para a aba **Integrações** e cole sua chave no campo "Chave de API Morrenus".
7. Clique em OK para salvar.

### 1. Obtendo Jogos

**Método 1: Buscar e Baixar** (requer chave de API)

- Clique no **botão de Busca** (lupa)
- Digite o nome de um jogo e pressione Enter
- Clique duas vezes em um resultado para baixá-lo

**Método 2: Arrastar e Soltar** (sem necessidade de chave de API)

- Baixe arquivos ZIP de manifesto no seu computador
- Arraste-os diretamente para a janela principal

### 2. Gerenciando seus Jogos

- Clique no **botão Biblioteca de Jogos** (ícone de livro) para ver todos os seus jogos instalados.
- Clique em qualquer jogo para abrir seus detalhes, divididos em três abas: **Visão Geral**, **Ferramentas** e **Desinstalar**.
- Na aba **Ferramentas**, você pode remover DRM manualmente com o Steamless, corrigir manifestos de instalação ou aplicar/remover o emulador Goldberg.
- Use o botão "Escanear Bibliotecas" no topo se algum jogo estiver faltando.

### 3. Personalizando sua Experiência

Clique no **botão de Engrenagem** para abrir as Configurações e personalizar o ACCELA:

- **Aba Downloads:** Ative a remoção automática de DRM (Steamless), aplicação automática do Goldberg ou geração de conquistas Steam.
- **Aba Steam:** Ative o modo SLSsteam ou GreenLuma e permita que o ACCELA gerencie seus arquivos de configuração.
- **Aba Áudio:** Controle a reprodução do zumbido de fundo, sons de entrada/saída e ajuste os volumes.
- **Aba Visual:** Altere as cores de destaque e fundo, personalize sua fonte, ative/desative o GIF ou mova a barra de título para o topo.

### Precisa de Ajuda?

- Confira os guias detalhados na barra lateral para funcionalidades específicas
- Veja as Perguntas Frequentes e Solução de Problemas para problemas comuns


<!-- tab: library -->
## Guia da Biblioteca de Jogos

### Abrindo sua Biblioteca

Clique em **Biblioteca de Jogos** (ícone de livro).

### Visualizando seus Jogos

- A biblioteca mostra automaticamente os jogos instalados pelo ACCELA
- Os jogos são exibidos com imagens de cabeçalho, nomes e espaço ocupado
- **Status de Atualização:** Cada jogo mostrará se está "Atualizado", "Verificando atualizações..." ou se há uma "Nova versão disponível"
- **Ordenação:** Use o menu suspenso no topo para ordenar por Instalado Recentemente, Nome, Tamanho ou AppID

### Detalhes e Gerenciamento de Jogos

Clicar em qualquer jogo abre a janela de Detalhes, dividida em três abas:

#### 1. Aba Visão Geral

- Veja informações do jogo: App ID, tamanho exato e caminho de instalação
- **Baixar Atualização / Validar Arquivos:** Inicia um download se uma nova versão estiver disponível ou valida seus arquivos existentes
- **Abrir Pasta:** Abre rapidamente o diretório de instalação do jogo

#### 2. Aba Ferramentas

- **Remover DRM (Steamless):** Executa automaticamente o Steamless nos executáveis do jogo
- **Corrigir Instalação (Remover .acf):** Exclui o arquivo de manifesto do jogo, forçando o Steam a re-verificar os arquivos
- **Aplicar / Remover Goldberg:** Ativa ou desativa o emulador Goldberg para o jogo selecionado

#### 3. Aba Desinstalar

- Clique em "Desinstalar Jogo" para remover o jogo e seus arquivos do disco
- Você será solicitado a confirmar antes que qualquer arquivo seja excluído

### Usuários Linux (Opções Extras)

- **Suporte a FakeAppId (Aba Visão Geral):** Marque "Adicionar ao SLSonline como:" e insira um AppID (ex.: 480 para Spacewar)
- **Opções de Desinstalação:**
  - **Remover Dados do Proton/Wine** — Exclui dados de compatibilidade (pode incluir saves locais)
  - **Remover Saves na Nuvem** — Exclui seus saves do Steam Cloud para esse jogo

### Encontrando Jogos Ausentes

- Use o botão **Escanear Bibliotecas** no topo se jogos não aparecerem
- Isso pesquisa todas as suas pastas Steam por jogos instalados pelo ACCELA

### Dicas

- A parte inferior da janela mostra o espaço total usado por todos os jogos instalados
- Desinstale jogos que você não joga mais para liberar espaço
- Reescaneie se você instalar ou mover jogos fora do ACCELA


<!-- tab: settings -->
## Guia de Configurações

### Acessando as Configurações

Clique no **Botão de Configurações** (ícone de engrenagem) na barra de título inferior.

### Configurações Principais

#### Chave de API Morrenus (Necessária para Busca)

**Como obter sua chave de API:**

1. Acesse [https://hubcapmanifest.com/](https://hubcapmanifest.com/)
2. Entre com o Discord (deve estar no servidor Discord do Morrenus)
3. Acesse [https://hubcapmanifest.com/api-keys/user](https://hubcapmanifest.com/api-keys/user)
4. Crie uma nova Chave de API e copie-a
5. Cole-a no campo de Chave de API nas Configurações (ícone de engrenagem)
6. Clique em OK para salvar

**Por que você precisa dela:**

- Necessária para buscar e baixar jogos do banco de dados Morrenus
- Sem ela, você só pode usar arrastar e soltar com seus próprios arquivos ZIP de manifesto

#### Modo SLSsteam

- **O que faz:** Instala jogos diretamente na sua biblioteca Steam
- **Windows:** Usa GreenLuma para compatibilidade
- **Linux:** Usa SLSsteam para compatibilidade
- **Quando usar:** Ative se quiser que os jogos apareçam na sua biblioteca Steam

#### Geração de Conquistas Steam

- **O que faz:** Gera automaticamente dados de conquistas Steam após os downloads
- **Requer:** Você deve clicar em "Executar SLScheevo" primeiro para entrar com sua conta Steam
- **Como funciona:** Usa o SLScheevo em segundo plano para criar estatísticas de conquistas

#### Remoção de DRM Steam

- **O que faz:** Remove a proteção DRM do Steam de jogos baixados
- **Corrige erros:** Previne erros de inicialização como "6:0000065432"
- **Ferramenta usada:** Steamless (executado automaticamente após o download)

### Configuração da Integração Steam

- **Linux:** Veja o guia do SLSsteam na barra lateral
- **Windows:** Veja o guia do GreenLuma na barra lateral

### Configuração do SLScheevo (Necessário para Conquistas)

**Configuração Inicial:**

1. Clique no botão **"Executar SLScheevo"** nas Configurações
2. Siga as instruções no terminal para entrar com sua conta Steam
3. Uma vez conectado, o SLScheevo salvará suas credenciais
4. Feche o SLScheevo quando terminar

**Após a Configuração:**

- A geração de conquistas funcionará automaticamente após os downloads
- Não é necessário executar o SLScheevo novamente, a menos que você mude de conta Steam

### Salvando as Configurações

- Clique em **OK** para salvar suas alterações
- Clique em **Cancelar** para manter suas configurações antigas
- Algumas configurações só afetam novos downloads (não os existentes)


<!-- tab: audio -->
## Guia de Configurações de Áudio

### Acessando as Configurações de Áudio

Clique no **Botão de Configurações de Áudio** (ícone de volume).

### Controles Básicos

#### Efeitos Sonoros

- **"Entering The Wired"** — Reproduz quando o app inicia (ativar/desativar)
- **"Let's All Love Lain"** — Reproduz quando o app fecha (ativar/desativar)
- **Zumbido de 50Hz** — Ruído de atmosfera de fundo (ativar/desativar)

#### Controles de Volume

- **Volume Geral** — Nível de som geral (padrão: 80%)
- **Volume de Efeitos** — Sons de interface e efeitos (padrão: 50%)
- **Volume do Zumbido** — Nível do ruído de fundo (padrão: 20%)

### Usando as Configurações de Áudio

1. **Teste os Sons Primeiro** — Use os botões "Testar Som ETW" e "Testar Som LALL" para ouvi-los
2. **Ajuste os Volumes** — Mova os controles deslizantes para seus níveis preferidos
3. **Ativar/Desativar** — Marque as caixas dos sons que deseja ouvir
4. **Clique em OK** — Para salvar suas configurações

### Dicas

- Diminua o volume do zumbido se achar o ruído de fundo distrativo
- Use os botões de teste para pré-visualizar antes de salvar
- As alterações não são salvas até que você clique em OK


<!-- tab: style -->
## Guia de Personalização Visual

### Acessando as Configurações Visuais

Abra as **Configurações** (ícone de engrenagem) e navegue até a aba **Visual**.

### O que Você Pode Alterar

#### Configurações de Cor

- **Cor de Destaque:** Afeta botões, barras de progresso, destaques de texto e ícones. Padrão: Rosa (#C06C84).
- **Cor de Fundo:** Afeta o fundo da janela principal e a barra de título. Padrão: Preto (#000000).
- **Ignorar avisos de cor:** Ignora as verificações de segurança que impedem cores muito escuras ou sem contraste.

#### Configurações de Fonte

- Clique em **Escolher Fonte** para personalizar a família de texto, tamanho e estilo.
- Clique em **Redefinir** para voltar à fonte padrão (TrixieCyrG-Plain, 10pt).

#### Configurações de Exibição

- **Mover Barra de Título para o Topo:** Move a barra de título da posição inferior padrão para o topo.
- **Ativar Modo Sonic:** Aplica paleta temática do Sonic (#ffcc00 de destaque e #002c83 de fundo).
- **Mostrar GIF:** Ativa ou desativa o GIF animado na janela principal.

#### GIFs Personalizados

- Clique em **GIFs Personalizados** para personalizar suas animações.
- Clique em **Limpar Cache de GIFs** para forçar a regeneração com suas cores atuais.

### Como Aplicar as Alterações

1. Ajuste suas cores, fontes e preferências de exibição na aba Visual.
2. Clique em **OK** para aplicar as alterações ao aplicativo inteiro.
3. *Nota:* Se as cores de fundo e destaque forem muito similares e você não marcou "Ignorar avisos de cor", o app irá alertá-lo e impedirá o salvamento.

#### O que Muda Instantaneamente

- Botões e ícones
- Barras de progresso
- Rótulos de texto e destaques
- Elementos da barra de título
- Posição da barra de título e exibição do GIF

#### O que Não Muda Instantaneamente

Os GIFs levam cerca de 2–7 segundos para serem recoloridos e armazenados em cache. O aplicativo não travou — ele está recolorindo os GIFs em segundo plano.


<!-- tab: slssteam -->
## Guia de Configuração do SLSsteam (Linux)

### O que é o SLSsteam?

O SLSsteam é um preload de objeto compartilhado (.so) que adiciona diversas melhorias ao seu cliente Steam, fornecendo funcionalidades avançadas para jogos não oficialmente possuídos.

### Funcionalidades

- **Desativar bloqueio de licença do Compartilhamento Familiar** (funciona para sua conta e de outros)
- **Desbloquear DLCs** (suporta modos de lista negra/branca)
- **Forçar ativação de DLCs** que não estão na Steam Store
- **Jogar games que você não possui** (via manifesto ou método manual)

### Funcionalidades Extras para Jogos Não Possuídos

- **Layouts de Controle do Desenvolvedor** — Use configurações oficiais de controle mesmo para jogos que você não possui — ótimo para Steam Deck e modo Big Picture
- **Suporte à Workshop do Steam** — Acesse mods da Workshop sem precisar possuir os jogos
- **Ignorar Verificações de Propriedade de Launchers de Mods** — Use Vortex, r2modman, 7th Heaven e Thunderstore mesmo sem o jogo na biblioteca
- **Local Correto para Saves** — Saves armazenados no diretório Steam correto; se você comprar o jogo depois, seus saves migram sem problemas

### Pré-requisitos (Steam Deck / Sistemas Imutáveis)

#### 1. Defina uma senha sudo

```
sudo passwd
```

Se você nunca fez isso, não conseguirá executar comandos sudo.

#### 2. Torne o sistema de arquivos gravável (Steam Deck)

```
sudo steamos-readonly disable
```

#### 3. Instale as ferramentas necessárias

- Tenha um editor de texto instalado (nano, vim, kate, etc.)
- Configure seu gerenciador de arquivos para mostrar arquivos ocultos

### Instalação

#### Passo 1: Baixar e Extrair

Obtenha a versão mais recente do repositório GitHub: [https://github.com/AceSLS/SLSsteam](https://github.com/AceSLS/SLSsteam)

#### Passo 2: Executar o Script de Configuração

```
./setup.sh install
```

#### Passo 3: Configurar o SLSsteam

Navegue até `~/.config/SLSsteam/` (ou `/home/deck/.config/SLSsteam/` para Steam Deck) e abra o arquivo de configuração.

Configuração principal a ativar:

```
playNotOwnedGames = Yes
```

Esta configuração permite jogar games baixados pelo ACCELA como se os possuísse.

#### Passo 4: Ativar no ACCELA

1. Abra as Configurações do ACCELA (ícone de engrenagem)
2. Abra a aba **Downloads**
3. Ative "Limitar Downloads às Bibliotecas Steam"
4. Abra a aba **Steam**
5. Ative o **Gerenciamento de Configuração SLSsteam**
6. Ative **Solicitar Reinício do Steam**
7. Clique em **OK** para salvar

#### Passo 5: Reiniciar o Steam

Quando solicitado pelo ACCELA, escolha reiniciar o Steam. Seus jogos deverão aparecer na sua biblioteca Steam.

#### Passo 6: Definir Compatibilidade Proton

1. Clique com o botão direito no jogo
2. Vá em **Propriedades → Compatibilidade**
3. Marque "Forçar o uso de uma ferramenta de compatibilidade específica do Steam Play"
4. Selecione sua versão preferida do Proton

### Instruções para o Modo Jogo do Steam Deck

> **ATENÇÃO:** Isso pode potencialmente brickar seu Steam Deck e exigirá uma imagem de recuperação para corrigir!

#### Método 1: Modificação Permanente

1. Navegue até `/usr/bin`
2. Encontre o script `steam-jupiter` e **faça um backup** em algum lugar seguro
3. Edite `steam-jupiter` e altere:

```
exec /usr/lib/steam/steam -steamdeck "$@"
```

Para:

```
exec env LD_AUDIT="/home/deck/.local/share/SLSsteam/library-inject.so:/home/deck/.local/share/SLSsteam/SLSsteam.so" -steamdeck "$@"
```

#### Método 2: Temporário (Mais Seguro)

```
env LD_AUDIT="/home/deck/.local/share/SLSsteam/library-inject.so:/home/deck/.local/share/SLSsteam/SLSsteam.so" steam
```

### Solução de Problemas

#### "Application load error 6:0000065432"

1. Ative a remoção de DRM nas Configurações do ACCELA
2. Certifique-se de que **Remoção de DRM Steam** está marcada antes de baixar jogos
3. O ACCELA executará automaticamente o Steamless nos executáveis do jogo

#### Jogos não aparecem na biblioteca Steam

- Verifique se `playNotOwnedGames = Yes` está definido na configuração do SLSsteam
- Reinicie o Steam completamente após ativar o modo SLSsteam
- Certifique-se de que ativou o Modo SLSsteam nas configurações do ACCELA

#### SLSsteam não carrega

- Verifique se a instalação foi concluída com sucesso
- Verifique se `~/.local/share/SLSsteam.so` existe
- Em sistemas imutáveis, certifique-se de ter tornado o sistema de arquivos gravável

#### Erros de permissão

- Execute scripts de configuração com `sudo` se necessário
- Certifique-se de ter permissões de escrita no diretório Steam

### Atualizando o SLSsteam

1. Baixe a versão mais recente do GitHub
2. Extraia para um novo diretório
3. Execute: `./setup.sh install`
4. Reinicie o Steam

### Desinstalação

1. Execute: `./setup.sh uninstall`
2. Remova o diretório de configuração: `rm -rf ~/.config/SLSsteam/`
3. Restaure o script `steam-jupiter` original se foi modificado
4. Reinicie o Steam


<!-- tab: greenluma -->
## Guia de Configuração do GreenLuma (Windows)

<details>
<summary>O que é o GreenLuma?</summary>
O GreenLuma é uma ferramenta de injeção de DLL para o Steam que desbloqueia funcionalidades avançadas, permitindo jogar games que não estão na sua biblioteca e acessar conteúdo DLC.
</details>

<details>
<summary>Aviso Importante</summary>
Este guia envolve modificar configurações do sistema e usar software de terceiros. Prossiga por sua própria conta e risco.

**É altamente recomendável:**

- Fazer backup do sistema ou criar um ponto de restauração antes de prosseguir
- Baixar o GreenLuma apenas de fontes confiáveis
</details>

<details open>
<summary>Parte 1: Configuração Inicial do GreenLuma</summary>

#### Passo 1: Baixar o GreenLuma

1. [Acesse o tópico oficial do GreenLuma](https://cs.rin.ru/forum/viewtopic.php?f=29&t=103709)
2. Baixe a versão mais recente do GreenLuma
3. **Nota:** Seu navegador ou antivírus pode sinalizar o download. Prossiga apenas se confiar na fonte.

#### Passo 2: Extrair Arquivos para sua Pasta do Steam

Localize sua pasta do Steam (normalmente `C:\Program Files (x86)\Steam`) e extraia diretamente nela:

- `GreenLuma2026_Files` (pasta)
- `GreenLuma_2026_x86.dll`
- `GreenLuma_2026_x64.dll`
- `GreenLumaSettings_2026.exe`
- `DLLInjector.exe`
- `DLLInjector.ini`

Extraia `x64launcher.exe` para a subpasta `bin`: `C:\Program Files (x86)\Steam\bin\`

#### Passo 3: Criar a Pasta "AppList"

No seu diretório principal do Steam, crie uma nova pasta chamada `AppList`.

#### Passo 4: Configurar as Opções do GreenLuma

1. Execute `GreenLumaSettings_2026.exe` como administrador
2. Ative **No Question Mode** e **Stealth Mode**
3. Salve e feche

#### Passo 5: NoQuestion.bin e StealthMode.bin

Crie arquivos `.txt` chamados `NoQuestion` e `StealthMode`, mude a extensão para `.bin` e torne-os **SOMENTE LEITURA**.

**Na primeira inicialização, o No Question Mode é ignorado. Quando perguntado quantos appids desbloquear, digite `1`. Quando perguntado qual appid, digite `480`. Isso deve ser repetido após cada atualização do GreenLuma.**
</details>

<details>
<summary>Parte 2: Executando Jogos com GreenLuma</summary>

> **Importante:** Sempre inicie o Steam executando o `DLLInjector.exe` da sua pasta Steam — nunca pelo atalho normal ou pelo `Steam.exe`.
</details>

<details>
<summary>Parte 3: Ativação Persistente (Agendador de Tarefas)</summary>

#### Passo 1: Desativar a Inicialização Automática do Steam

Em Steam → Configurações → Interface, desmarque **"Executar o Steam quando meu computador iniciar"**.

#### Passo 2: Abrir o Agendador de Tarefas

Pressione `Windows + R`, digite `taskschd.msc`, pressione Enter.

#### Passo 3: Criar uma Tarefa Básica

1. Clique em **"Criar Tarefa Básica..."**
2. Nome: `GreenLuma Startup` → Avançar
3. Gatilho: **Quando eu fizer logon** → Avançar
4. Ação: **Iniciar um programa** → Avançar
5. Navegue até sua pasta Steam e selecione `DLLInjector.exe` → Avançar
6. Marque **"Abrir o diálogo Propriedades"** → Concluir

#### Passo 4: Configurar Propriedades da Tarefa

1. Clique em **Alterar Usuário ou Grupo...**, digite `SYSTEM`, clique em Verificar Nomes → OK
2. Marque **Executar com privilégios mais altos**
3. Selecione **Executar estando o usuário conectado ou não** → OK
</details>

<details>
<summary>Solução de Problemas e Considerações</summary>

**Antivírus:** Adicione uma exceção para toda a sua pasta de instalação do Steam.

**Jogos não aparecem na biblioteca:**
- Certifique-se de que o Modo GreenLuma está ativado nas Configurações do ACCELA
- Verifique se está iniciando o Steam via `DLLInjector.exe`
- Verifique se a pasta `AppList` existe

**"Application load error 6:0000065432":** Ative a remoção de DRM nas Configurações do ACCELA antes de baixar jogos.
</details>

<details>
<summary>Integração com o ACCELA</summary>

1. Abra as Configurações do ACCELA → aba **Steam**
2. Ative **Modo Wrapper GreenLuma** e **Gerenciamento de Configuração GreenLuma**
3. Clique em **OK**

> **NOTA IMPORTANTE:** VOCÊ SÓ PODE DESBLOQUEAR 134 APPIDS POR VEZ. DLCS ESTÃO INCLUÍDOS NESSA CONTAGEM.
</details>

<details>
<summary>Desinstalação</summary>

1. Exclua todos os arquivos do GreenLuma da sua pasta Steam
2. Remova a tarefa do Agendador de Tarefas
3. Reinicie seu computador e inicie o Steam normalmente
</details>


<!-- tab: faq -->
## Perguntas Frequentes e Solução de Problemas

### Problemas Comuns

#### A busca não funciona / "API search failed"

- Você precisa de uma chave de API para buscar jogos
- Obtenha sua chave em [https://hubcapmanifest.com/api-keys/user](https://hubcapmanifest.com/api-keys/user)
- Certifique-se de estar logado com o Discord e no servidor do Morrenus
- Cole a chave nas Configurações (ícone de engrenagem) e clique em OK

#### O app não inicia

- O ACCELA foi feito para Win10, Win11 e qualquer distribuição Linux, incluindo o Steam Deck
- Abra uma issue para obter ajuda com sua plataforma ou configuração

#### Arrastar e soltar não funciona

- Apenas arquivos ZIP podem ser arrastados
- Certifique-se de que o zip é um arquivo de manifesto válido contendo arquivos .lua

#### Sem som

- Verifique se as Configurações de Áudio estão ativadas
- Certifique-se de que o volume do sistema não está mudo
- Certifique-se de que o aplicativo não está mudo no mixer de volume do sistema
- Teste com os botões de pré-visualização de áudio

#### Downloads lentos

- Os arquivos de jogos são baixados dos servidores da Valve usando o DepotDownloaderMod
- Downloads lentos são causados pelos servidores do Steam ou pela sua própria conexão

#### Jogos não aparecem na biblioteca

- Mostra apenas jogos instalados pelo ACCELA (identificados por uma pasta `.DepotDownloader` dentro da pasta do jogo)
- Se quiser que o ACCELA gerencie um jogo instalado fora dele, crie essa pasta manualmente
- Clique em "Escanear Bibliotecas Steam" para atualizar

#### Não consigo mudar as cores

Algumas combinações de cores são bloqueadas por questões de legibilidade. Foram definidos limites nos seletores de cor para garantir que a interface permaneça utilizável.

### Obtendo Ajuda

Se você encontrar problemas não cobertos aqui:

- Abra uma issue descrevendo o que você estava fazendo quando o problema ocorreu
- Inclua quaisquer mensagens de erro que você veja

### Dicas

- Verifique a área de log na parte inferior para informações detalhadas
- Reinicie o app se algo parecer errado
- Certifique-se de ter espaço em disco suficiente para jogos grandes