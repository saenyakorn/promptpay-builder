# Promptpay Builder <!-- omit in toc -->

Thai Promptpay QR code builder given a phone number and amount.

# Table of Contents <!-- omit in toc -->

- [Features](#features)
- [Contributing](#contributing)
- [Developing](#developing)
- [Deploying](#deploying)
- [License](#license)

# Features

- [x] Generate QR code for Promptpay given a phone number and amount
- [ ] Support other currencies
- [ ] Support citizen ID as identifier

# Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. This project based on [SvelteKit](https://kit.svelte.dev/). You can read the [SvelteKit documentation](https://kit.svelte.dev/docs) to learn about SvelteKit.

# Developing

Once you clone the project, first you need to install the dependencies

```bash
pnpm install
```

Then, you can run the project in development mode

```bash
pnpm dev
```

The project will be running at [http://localhost:5173/](http://localhost:5173/).

# Deploying

This project is developed using [Github Page](https://pages.github.com/). It's use `gh-pages` branch to deploy the static site. This project already provides Github Action for deployment.

To deploy the project, one thing you have to do is `dispatching` the [Deployment Workflow](https://github.com/saenyakorn/utm-builder/actions/workflows/deploy.yaml) then the site will be deployed automatically using latest version of `main` branch.

> Don't forget to change CNAME file if you want to deploy to your own domain.

# License

MIT
