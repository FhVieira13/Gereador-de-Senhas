# 🦇 BAT PASSWORD

![Expo](https://img.shields.io/badge/Expo-React%20Native-blue?logo=expo)
![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-green)
![Made by](https://img.shields.io/badge/made%20by-Flávio%20Henrique-yellow)

> 🔐 Gerador de senhas moderno inspirado no universo do Batman

---

## 📱 Sobre o projeto

O **BAT PASSWORD** é um aplicativo desenvolvido com **React Native + Expo** que permite gerar senhas seguras de forma rápida e prática, com um visual moderno em tema escuro.

---

## ⚡ Funcionalidades

* 🔐 Geração de senha aleatória segura
* 📋 Copiar senha com um clique
* 🎨 Interface estilizada (dark + amarelo)
* ⚠️ Feedback com alertas

---

## 🖼️ Preview

<img src="https://via.placeholder.com/300x600.png?text=Preview+App" width="250"/>

---

## 🛠️ Tecnologias

* React Native
* Expo
* JavaScript
* Expo Clipboard
* Expo Vector Icons

---

## 🚀 Como rodar o projeto

```bash
# Clonar repositório
git clone https://github.com/seu-usuario/bat-password.git

# Entrar na pasta
cd bat-password

# Instalar dependências
npm install

# Rodar projeto
npx expo start
```

---

## ⚠️ Dependência importante

```bash
npx expo install expo-clipboard
```

E no código:

```js
import * as Clipboard from 'expo-clipboard';
```

---

## 🧠 Lógica da senha

A senha é gerada usando:

* Letras maiúsculas
* Letras minúsculas
* Números
* Caracteres especiais

```js
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#';
```

---

## 🎯 Melhorias futuras

* [ ] Definir tamanho da senha
* [ ] Selecionar tipos de caracteres
* [ ] Histórico de senhas
* [ ] Medidor de força da senha

---

## 👨‍💻 Autor

**Flávio Henrique**

---

## 📄 Licença

Este projeto está sob a licença MIT.
