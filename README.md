# ZenUI

[A collection of UI components](https://zen-ui.zengrc.com/) that are shared across Reciprocity applications.

Powered by [Stencil](https://stenciljs.com/) and [Storybook](https://storybook.js.org/).

[![Coverage Status](https://coveralls.io/repos/github/reciprocity/zen-ui/badge.svg?branch=main)](https://coveralls.io/github/reciprocity/zen-ui?branch=main)

## Installation

Before installing, download and install [Node.js](https://nodejs.org/en/). Latest [LTS version](https://nodejs.org/en/about/releases/) is recommended.

It is not necessary to have Docker installed as the project is not containerized.

## Quick start

Install dependencies:
```bash
yarn
```

Start Stencil compiler and Storybook server (available at `http://localhost:6006`):
```bash
# Runs both in watch mode with HMR
yarn start
```

#### Create new Web Components

Scaffolds a new component, creating the folder structure with basic code, styles, unit tests, and documentation:
```bash
yarn create-component zen-{component-name}
```

#### Testing

To run unit and integration tests in Jest:
```bash
yarn test
```

To run E2E/visual tests in Cypress:
```bash
yarn run test:e2e
```

For more details on testing (including visual testing) check the [Testing doc](./docs/testing.md).

#### Linting and Formatting
Both `lint` and `format` commands will run before the changes are pushed to the repository using a [Husky](https://github.com/typicode/husky) pre-push hook.

```bash
# Checks and fixes linting errors
yarn lint
# Only checks for linting errors
yarn lint:check
```

```bash
# Checks and fixes formatting errors
yarn format
# Only checks for formatting errors
yarn format:check
```

## Using components within your own app

For instructions on how to consume this library check the [Getting Started stories](src/stories/getting_started.stories.mdx).

## Contributing

To contribute, please familiarize yourself with the [Contributing doc](./docs/contributing.md).
