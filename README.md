# vee-cpf-cnpj

CPF and CNPJ validators for [VeeValidate 3](https://logaretm.github.io/vee-validate/)

This package is a simple wrapper around the [@fnando/cnpj](https://github.com/fnando/cnpj) and
[@fnando/cpf](https://github.com/fnando/cpf) validators to expose an validation object ready to be imported 
into VeeValidate

## Installation

This lib is available as a [NPM package](https://www.npmjs.com/package/vee-cpf-cnpj). To install it, use the following command:

```
npm install vee-cpf-cnpj --save
```

Or, if you're using yarn

```
yarn add vee-cpf-cnpj
```

## Usage

```js
// @import
import { cpf, cnpj, cpfOrCnpj } from 'vee-cpf-cnpj'; // import what you need

// add validators to VeeValidate
extend('cpf', cpf);
extend('cnpj', cnpj);
extend('cpf_or_cnpj', cnpj);
```

## Available validators

#### `cpf`

The field under validation must be a valid CPF

#### `cnpj`

The field under validation must be a valid CNPJ

#### `cpfOrCnpj`

The field under validation must be either a valid CPF or a valid CNPJ 
