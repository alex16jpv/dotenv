# dotenv

This package is a zero-dependency module that loads environment variables from a .env file into process.env.

<img src="https://raw.githubusercontent.com/alexconlag/dotenv/main/icon.svg" width="200">

- [🌱 Install](#install)
- [🏗️ Usage](#usage)

## Install

```bash
$ npm i @alexconlag/dotenv
```

## Usage

Create a `.env` file in the root of your project:

```bash
SECRET_KEY=YOURSECRETKEYGOESHERE
OTHER_VAR=HEREYOURVAR
```

As early as possible in your application, import and configure dotenv:

```javascript
import { config } from "@alexconlag/dotenv";
config();

console.log(process.env);
```
