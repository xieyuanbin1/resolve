/*
 * Copyright (c) 2021 EdgerOS Team.
 * All rights reserved.
 *
 * Detailed license information can be found in the LICENSE file.
 *
 * File: index.d.ts.
 *
 * Author: xieyuanbin@acoinfo.com
 *
 */

/**
 * init the program root path.
 * @param baseDir program root path
 */
export function init(baseDir: string): void;

/**
 * resolve current module path.
 * @param dir to resolve
 */
export function resolve(dir: string): string;
