# @ts-ghost/admin-api

## 1.0.1

### Patch Changes

- c6f50c3: update README and metadatas
- Updated dependencies [c6f50c3]
  - @ts-ghost/core-api@1.0.1

## 1.0.0

### Major Changes

- 99c9110: ## Breaking Changes

  `@ts-ghost/core-api` QueryBuilder and Fetcher were updated so this package also sees its API updated. Now the resource only have input params, output is handled on the fetcher via the `fields`, `formats` and `include` methods.

  ### Before

  Given this queries in the old API

  ```ts
  const posts = await api.posts
    .browse({
      input: {
        limit: 5,
        order: "title DESC",
      },
      output: {
        include: {
          authors: true,
        },
      },
    })
    .fetch();

  const onePost = await api.posts
    .read({
      input: {
        slug: "test-post",
      },
      output: {
        fields: {
          slug: true,
          html: true,
        },
      },
    })
    .fetch();
  ```

  ### After

  Rewritten in the new API version:

  ```ts
  const posts = await api.posts
    .browse({
      limit: 5,
      order: "title DESC",
    })
    .include({
      authors: true,
    })
    .fetch();

  const onePost = await api.posts
    .read({
      slug: "test-post",
    })
    .fields({
      slug: true,
      html: true,
    })
    .fetch();
  ```

  ## Other changes

  - Updated documentation
  - Code cleanup

### Patch Changes

- Updated dependencies [99c9110]
  - @ts-ghost/core-api@1.0.0

## 0.2.2

### Patch Changes

- 079b7e4: ## Improved admin-api
  Add missing resources:

  - tags
  - offers
  - users
  - newsletters

  ## Improved typing and usage of the new fetchers methods.

  Fetcher methods .fields(), .formats() and .include() got some upgrade to have better type-safety for unknown fields and runtime stripping of unknown keys.

  ## Upgrade dependencies

  Upgrade most of the devDependencies with TypeScript 5.0 compatible versions (lint, prettier, etc)

- Updated dependencies [079b7e4]
  - @ts-ghost/core-api@0.3.2

## 0.2.1

### Patch Changes

- f5a95a2: add admin-tiers API
- Updated dependencies [f5a95a2]
  - @ts-ghost/core-api@0.3.1

## 0.2.0

### Minor Changes

- 5b2326f: Admin API in GBB, upgrade to TypeScript 5.0, remove `as const` requirement

  - eslint conf is now at the root level
  - you can now use gbb export-admin members resource
  - upgrade to TS 5.0
  - Improved typing of query builder so using `as const` is not necessary anymore

### Patch Changes

- Updated dependencies [5b2326f]
  - @ts-ghost/core-api@0.3.0

## 0.1.0

### Minor Changes

- 4e95c66: ## New package `@ts-ghost/admin-api`

  First implementation of the Ghost Admin API. Currently only supports the following endpoint:

  - `members`
  - `posts`
  - `pages`
  - `site`

  ## Refactoring of the Fetchers and QueryBuilders

  - Zod upgrade
  - New `formats()`, `fields()` and `include()` methods on the Fetchers to have better output type safety. These new methods are intended to replace the `output` options args of the QueryBuilder later. They provide a better typing of the output transforming the schema like removing the `optionnal` effect of a field if it was included in the `include` option of the QueryBuilder.

### Patch Changes

- Updated dependencies [4e95c66]
  - @ts-ghost/core-api@0.2.0