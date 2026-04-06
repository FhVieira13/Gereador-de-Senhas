BAT PASSWORD

Gerador de senhas estilizado inspirado no universo do Batman, desenvolvido com React Native + Expo.
O app permite gerar senhas seguras e copiá-las facilmente para a área de transferência.

🚀 Funcionalidades
🔐 Geração de senha aleatória
📋 Copiar senha para a área de transferência
🎨 Interface moderna (tema escuro + amarelo estilo Batman)
⚠️ Alertas para ações do usuário
📱 Preview
Ícone de morcego 🦇
Campo com senha gerada
Botão GERAR SENHA
Botão COPIAR
🛠️ Tecnologias utilizadas
React Native
Expo
JavaScript (ES6+)
Expo Vector Icons
📦 Instalação
Clone o repositório:
git clone https://github.com/seu-usuario/bat-password.git
Acesse a pasta:
cd bat-password
Instale as dependências:
npm install
Execute o projeto:
npx expo start
⚠️ Observação importante

Para funcionar corretamente a cópia da senha, é necessário instalar o Clipboard do Expo:

npx expo install expo-clipboard

E importar no código:

import * as Clipboard from 'expo-clipboard';
🧠 Como funciona

A senha é gerada a partir de um conjunto de caracteres:

Letras maiúsculas e minúsculas
Números
Símbolos especiais

Trecho principal:

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#';

Um loop gera 12 caracteres aleatórios para formar a senha.

🎨 Personalização

Você pode facilmente modificar:

🔢 Tamanho da senha (alterando o for)
🔣 Tipos de caracteres
🎨 Cores no StyleSheet
🦇 Ícone (MaterialCommunityIcons)
💡 Melhorias futuras
Definir tamanho da senha pelo usuário
Alternar tipos de caracteres (checkbox)
Histórico de senhas geradas
Indicador de força da senha
👨‍💻 Autor

Desenvolvido por FH
