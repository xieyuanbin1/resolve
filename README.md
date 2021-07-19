Instructions
---

This is an EdgerOS package.

## Install
```shell
npm install @edgeros/resolve
```

## Usage

```js
// example.js
// EAP runs in the program directory
const { init, resolve } = require('@edgeros/resolve')
// we need to `init` root path
// default '/'
init('dist')

let path1 = resolve('util')
// path1: program/dist/util

```