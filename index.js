/*
 * Copyright (c) 2021 EdgerOS Team.
 * All rights reserved.
 *
 * Detailed license information can be found in the LICENSE file.
 *
 * File: index.js.
 *
 * Author: xieyuanbin@acoinfo.com
 *
 */

/*
 * this package
 */

const path = require('path')
let __baseDir = '/'

function init(basePath) {
  __baseDir = path.resolve('.', basePath)
}

function resolve(dir) {
  return path.resolve(__baseDir, dir)
}

module.exports = {
  init,
  resolve
}
