# shared-type-def

Project that exposes a single developer-defined TypeScript [declaration file](https://en.wikipedia.org/wiki/TypeScript#Declaration_files): `types.d.ts`.

`package.json` references this `types.d.ts` file via `"types": "types.d.ts"`, which allows _other_ packages to consume the types exported out of `types.d.ts.
