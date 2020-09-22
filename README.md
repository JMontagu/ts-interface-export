# TS workspaces with shared 'types'

Demo project that contains two typescript packages that are consumed by a third library. Shows two different ways of exporting TypeScript types for consumption by other packages.

- `packages/shared-types` provides an interface and a function implementation.
- `packages/shared-type-def` only provides an interface declaration via a `types.d.ts` file.
- `packages/a-lib` consumes both these packages.

See README.md in each package for further details.

## Getting started

Run:

- `yarn install`
- `yarn build`

## Project structure

This demo repo makes use of [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and a [monorepo](https://en.wikipedia.org/wiki/Monorepo) structure to demo this. These 3 packages could also be in 3 different repos, and published/consumed via NPM.
