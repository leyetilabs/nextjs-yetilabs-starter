<div align="center"><strong>NextJS+TypeScript+Chakra-UI starter to bootstrap your projects</strong></div>

<div align="center">All the tools needed to enforce a strong foundation, so start building</div>

<div align="center">
  <sub>Created by <a href="https://twitter.com/leyetilabs" target="_blank" rel="noopener noreferrer">Yeti Labs</a> with the help of our <a href="https://github.com/leyetilabs/nextjs-yetilabs-starter">wonderful devs</a>.</sub>
</div>

<br />

## Features

- ⭐ Next.js 12
- 🔨 TypeScript
- 📏 ESLint — Highlight and fix problems in your code
- 💖 Prettier — Code Formatter for consistent code style
- 🐶 Husky — For running scripts before committing
- 🔍 lint-staged — Run ESLint and Prettier against staged Git files
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs

## Quick Start

The best way to start with this template is using [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

```
yarn create next-app -e https://github.com/leyetilabs/nextjs-yetilabs-starter
# or
npx create-next-app -e https://github.com/leyetilabs/nextjs-yetilabs-starter
```

### Development

To start the project locally, run:

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation
### Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `dev` — Starts the application in development mode at `http://localhost:3000`.
- `build` — Creates an optimized production build of your application.
- `start` — Starts the application in production mode.
- `lint` — Runs ESLint for all files in the `src` directory using cache.
- `prettier` — Runs Prettier for all files in the `src` directory.
- `prepare` — Husky install.
- `tsc` — Validate code using TypeScript compiler.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.