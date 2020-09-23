# shared-type-def

'Type' project, that exposes two developer-defined TypeScript [declaration file](https://en.wikipedia.org/wiki/TypeScript#Declaration_files):

- `types.d.ts`
- `ts3.1/types.d.ts`

Any projects targeting TypeScript 3.5 or higher will consume the `ts3.5/types.d.ts` types via the `typesVersions` declaration in `package.json`. This definition includes use of `Omit` which is only supported in 3.5 and up.

Older TypeScript projects will continue to consume 'legacy' `types.d.ts` via `types`.
