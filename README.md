# TS workspaces with shared 'types'

Demo project that contains two typescript packages that are consumed by two libraries. Shows two different ways of exporting TypeScript types for consumption by other packages.

## 'Type' packages

- `packages/shared-types` provides an interface and a function implementation.
- `packages/shared-type-def` only provides an interface declaration via a `types.d.ts` file — and supports 'legacy' TypeScript 2.1 typings alongside TypeScript 3.5+ types.

## Library packages

- `packages/a-lib` 'legacy' TypeScript 2.1 project — consumes both type packages.
- `packages/b-lib` 'new' TypeScript 3.5 project — consumes both type packages.

See README.md in each package for further details.

## Getting started

Run:

- `yarn install`
- `yarn build`

## Project structure

This demo repo makes use of [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and a [monorepo](https://en.wikipedia.org/wiki/Monorepo) structure to demo this. These 3 packages could also be in 3 different repos, and published/consumed via NPM.
