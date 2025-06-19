# 💅 Karol Agendamento - App para Salão de Beleza

Este é um aplicativo de agendamento de horários desenvolvido em React Native com Expo, focado em estúdios de beleza e design de cílios. O objetivo é fornecer uma interface simples para que os clientes possam marcar seus horários, enquanto o proprietário do salão recebe notificações automáticas via WhatsApp para cada novo agendamento.

## ✨ Funcionalidades Principais

* **Tela de Introdução:** Uma tela de boas-vindas para apresentar a marca ao cliente.
* **Formulário de Agendamento Simples:** Coleta de nome, WhatsApp, dia, mês e hora do agendamento em campos de texto diretos, sem a complexidade de calendários.
* **Integração com Firebase:** Os agendamentos são salvos em tempo real no banco de dados Cloud Firestore, garantindo segurança e escalabilidade.
* **Notificação Automática via WhatsApp:** Assim que um agendamento é salvo, uma Firebase Cloud Function é acionada e utiliza a API da Twilio para enviar uma mensagem de notificação instantânea para o número do proprietário do salão.

## 🛠️ Tecnologias Utilizadas

* **Frontend:** React Native com Expo
* **Banco de Dados:** Google Cloud Firestore
* **Backend (Serverless):** Firebase Cloud Functions
* **Serviço de Mensagens:** Twilio WhatsApp API
* **Linguagem:** TypeScript

## 📸 Screenshots

| Tela de Introdução | Tela de Agendamento |
| :---: | :---: |
| ![Tela de Introdução](https://via.placeholder.com/250x500.png?text=Tela+de+Introdução) | ![Tela de Agendamento](https://via.placeholder.com/250x500.png?text=Tela+de+Agendamento) |

## 🚀 Começando

Para executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS)
* [Git](https://git-scm.com/)
* Uma conta no [Firebase](https://firebase.google.com/)
* Uma conta na [Twilio](https://twilio.com/)

### Instalação

1.  **Clone o repositório** (se ele estiver no GitHub):
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```
2.  **Instale as dependências do aplicativo:**
    ```bash
    npm install
    ```
3.  **Instale as dependências das Funções do Firebase:**
    ```bash
    cd functions
    npm install
    cd .. 
    ```

## ⚙️ Configuração

Para que o projeto funcione, você precisa configurar suas chaves de API do Firebase e da Twilio.

> ⚠️ **Aviso de Segurança:** Este projeto armazena as chaves diretamente nos arquivos de código para fins de simplicidade e aprendizado. Em um projeto de produção ou público, **NUNCA** faça isso. Use variáveis de ambiente (com um arquivo `.env`) para o frontend e o sistema de secrets do Google Cloud para as Cloud Functions.

#### **1. Configuração do Firebase (Frontend)**

1.  Siga os passos da **Fase 1** do nosso guia para criar um projeto no Firebase.
2.  Crie um **App da Web** (`</>`) nas configurações do seu projeto.
3.  Crie um arquivo chamado `firebaseConfig.js` na raiz do seu projeto.
4.  Cole as suas credenciais (o objeto `firebaseConfig`) dentro deste arquivo, usando o modelo que já criamos.

#### **2. Configuração da Twilio e Cloud Functions (Backend)**

1.  Abra o arquivo `functions/index.js`.
2.  Preencha as seguintes variáveis com as suas informações da Twilio:
    * `accountSid`
    * `authToken`
    * `toWhatsAppNumber` (o seu número pessoal que receberá as notificações)
    * `contentSid` (o ID do seu template de mensagem do WhatsApp)

## 🏃 Executando o Projeto

### 1. Como Usar o Expo para Testar no Celular

O Expo torna o processo de testar seu aplicativo em um celular físico muito simples, através do app **Expo Go**.

1.  **Instale o Expo Go:** No seu celular, baixe o aplicativo "Expo Go" da [Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent) ou da [App Store (iOS)](https://apps.apple.com/us/app/expo-go/id982107779).
2.  **Inicie o Servidor de Desenvolvimento:** No seu computador, na pasta raiz do projeto, execute o comando:
    ```bash
    npx expo start
    ```
3.  **Conecte na Mesma Rede:** Garanta que seu computador e seu celular estejam conectados na **mesma rede Wi-Fi**. Este passo é crucial.
4.  **Escaneie o QR Code:** Um QR Code aparecerá no seu terminal. Abra o aplicativo Expo Go no celular e use a função de escanear para ler o código.
5.  **Teste o App:** O aplicativo de agendamento será carregado dentro do Expo Go, e você poderá usá-lo. Qualquer alteração que você salvar no código será refletida quase instantaneamente no celular.

### 2. Ativando o Backend (Notificações)

1.  Certifique-se de que seu projeto Firebase está no plano **Blaze**.
2.  No terminal, navegue até a pasta `functions`:
    ```bash
    cd functions
    ```
3.  Faça o deploy das suas funções para a nuvem:
    ```bash
    firebase deploy --only functions
    ```
    
Agora, com o frontend rodando via Expo Go e o backend ativo na nuvem, seu sistema está completo e pronto para ser testado de ponta a ponta.
