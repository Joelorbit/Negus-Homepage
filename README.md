# Negus Consultants Homepage

Responsive homepage for Negus Consultants, built with React, TypeScript, and Vite.

## Features

- Responsive layouts for desktop and mobile
- Complementary light and dark themes
- Three-step interactive path builder for choosing a goal and learning format
- Admissions, programs, courses, packages, stories, FAQs, and contact sections

## Requirements

- Node.js
- pnpm

## Get started

Install dependencies:

```sh
pnpm install --frozen-lockfile
```

Start the development server:

```sh
pnpm dev
```

Vite serves the site at `http://localhost:8443` by default. To use a different port:

```sh
PORT=5173 pnpm dev
```

## Production build

Build the site and serve the built output locally:

```sh
pnpm build
pnpm preview
```

Preview uses port `8443` by default. Set `PORT` to change it, for example `PORT=4173 pnpm preview`.

## Formatting

Format the source files with:

```sh
pnpm format
```
