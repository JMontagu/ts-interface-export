# shared-types

This package contains a typescript file: `src/index.ts` which exports:

- an interface
- a function

A `build` step in `package.json` will compile `index.ts` into an ES2015 `index.js` file for use by other packages. Additionally, the `-d` flag will make the TypeScript compiler generate a corresponding [declaration file](https://en.wikipedia.org/wiki/TypeScript#Declaration_files). This allows other packages that use TypeScript to gain type support for the `index.js` file.

Other packages consuming this package know this all exists because we define this info in the `package.json` as:

```
"main": "dist/index.js",
"types": "dist/index.d.ts",
```
