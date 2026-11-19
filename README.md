# Registration Form

A three-step registration UI built with Vue and Tailwind CSS for a front-end take-home assignment.

**Live demo:** [Open on Vercel](https://sample-registration-form.vercel.app)

## Overview

An implementation of a front-end take-home assignment completed during a job application. The wizard follows the supplied Cypress specifications for username, email, review, and the Description component.

## Features

- Validate usernames with 4–15 ASCII letters, numbers, or underscores and validate email input.
- Preserve values while navigating between three steps.
- Check balanced parentheses, brackets, and braces in an optional description after a one-second debounce.
- Provide accessible labels, focus handling, and validation feedback.
- Retain the supplied Cypress specifications alongside extracted logic tests.

## Tech stack

Vue 3, JavaScript, Vite, Vue Router, Tailwind CSS, Cypress, Node.js built-in test runner.

## Run locally

Use Node.js 22.12 or newer and Bun (the repository includes `bun.lock`). With npm, use `npm install` followed by `npm run dev`.

```sh
git clone https://github.com/ThePrimeShak/sample-registration-form.git
cd sample-registration-form
bun install --frozen-lockfile
bun run dev
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build |
| `npm run test:logic` | Run logic tests |
| `npm run test:unit` | Run Cypress component tests |
| `npm run test:unit:dev` | Open Cypress component testing |
| `npm run format` | Format project files |
| `npm run format:check` | Check formatting |

## Project structure

- `src/components/` — registration, description, and shared UI.
- `src/composables/` — wizard state and navigation.
- `tests/` — validation, navigation, and debounce tests.

## Scope and limitations

Values stay in memory and reset on refresh. This UI does not create accounts, submit to a backend, or persist data. Current Cypress specifications are component tests; e2e scripts are available for future specifications.

## Author

Built by [ThePrimeShak](https://github.com/ThePrimeShak) · [LinkedIn](https://www.linkedin.com/in/theprimeshak/).
