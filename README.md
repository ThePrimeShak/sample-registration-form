# Registration Form

This repository is my implementation of a front-end take-home assignment completed as part of a job application. The brief asked for a three-step Vue 3 registration wizard, validation based on the supplied Cypress specifications, persistent values while moving between steps, and a `Description` component implemented from its tests.

The result is a responsive Vue 3 application built with Vite and Tailwind CSS. It collects a username and email, then shows a review step with an optional description and a bracket-balance check.

[ThePrimeShak on LinkedIn](https://www.linkedin.com/in/theprimeshak/)

## Assignment coverage

| Requirement | Implementation |
| --- | --- |
| Three separate wizard steps | Username, email, and review are rendered one at a time. |
| Step heading | Each screen displays `Step: username`, `Step: email`, or `Step: review`. |
| Navigation controls | `#btn-prev` and `#btn-next` navigate between steps and are disabled at the first and last boundaries. |
| Required input attributes | Username and email inputs retain the requested `id` and `name` attributes. |
| Validation | Username and email rules match the supplied Cypress cases and prevent invalid navigation. |
| Preserve entered values | Username, email, and description remain available while moving backward and forward. |
| Description component | Balanced `()`, `[]`, and `{}` pairs are checked with a one-second debounce, including nested and mismatched cases. |
| Vue 3 | The application uses Vue 3 with both Composition API and Options API where each fits the existing component contract. |
| UI bonus | The supplied functionality is presented as a responsive Tailwind-based interface with accessible labels, errors, focus handling, and a 404 page. |
| Supplied tests | The task-specific `Wizard.cy.js` and `Description.cy.js` specifications remain unchanged. Additional logic tests cover extracted state and utility code. |

## Development

Use Node.js 22 or later and npm, or install dependencies with Bun using the included `bun.lock`.

```sh
bun install --frozen-lockfile
bun run dev
```

With npm, run `npm install` followed by `npm run dev` instead. The commands below also work as `bun run <script>`.

```sh
npm run build         # Generate production assets in dist/
npm run preview       # Serve the production build locally
npm run test:logic    # Test validation, navigation, and debounce with Node
npm run test:unit     # Run the existing Cypress component tests
npm run test:unit:dev # Open Cypress component testing interactively
npm run format       # Format application code and new logic tests
npm run format:check # Check formatting without changing files
```

Cypress needs its browser dependencies and permission to launch a browser and listen on a local port. The logic tests run without a browser or development server. Existing Cypress specifications are preserved and excluded from automatic formatting. The e2e scripts remain available for future e2e specifications; the current tests are component tests.

## Behavior

- Usernames accept 4–15 ASCII letters, numbers, or underscores.
- Email must match the project's existing email format rule.
- Invalid input shows an error and prevents advancing. Editing a field clears stale errors.
- Previous is disabled on the first step; Next is disabled on the review step.
- Username, email, and description survive navigation between steps.
- Next and Enter follow the same validation flow.
- The optional description checks matching `()`, `[]`, and `{}` after one second of inactivity. Pending checks are cancelled when the component unmounts.
- Form values stay in memory. Refreshing resets them; there is no backend, account creation, submission, or persistent storage.