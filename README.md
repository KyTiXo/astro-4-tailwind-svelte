# Astro 4 Minimal Starter with Tailwind and Svelte

Welcome to my Astro 4 + Svelte Starter Kit! This project integrates the power of Astro 4 with TailwindCSS + Prettier Sorting for both Astro files and Svelte. This is a minimal setup out of the box mainly to address the issues with Prettier sorting tailwind classes in both Astro + Svelte files.

This _includes_ sorting tailwind classes inside of style tags in both Astro and Svelte components as well.
eg:

```sass
<style lang="postcss">

h1 {
    @apply sm:text-xl md:text-2xl;
}

</style>
```

## Features

- 🚀 **Astro 4**: A modern, performance-focused web framework.
- 💅 **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs. Includes Prettier sorting for clean and organized CSS.
- 🌟 **Svelte**: A radical new approach to building user interfaces.
- 🧹 **Prettier Integration**: Configured for TailwindCSS sorting. Please add your own additional prettier config as I don't include one here.
- 🛠️ **Custom Aliases**: Simplify imports with aliases like `@components/`, `@layouts/`, and `@assets/`.

## What's Included

- Svelte integration for building reactive components.
- TailwindCSS for rapid and responsive styling, enhanced with Prettier sorting in Astro and Svelte files.
- PostCSS `@apply` directive working seamlessly in both Astro and Svelte as shown in the example file.
- Custom aliases for a more efficient development workflow:
  - `~/*` for the source directory.
  - `@components/*` for Svelte components.
  - `@layouts/*` for layout components.
  - `@assets/*` for static assets.

## Quick Start

To get started with this starter pack, follow these steps:

```bash
# Clone the Repository
git clone https://github.com/KyTiXo/astro-4-tailwind-svelte.git

# Install Dependencies
cd astro-4-tailwind-svelte
pnpm install

# Start Developing
pnpm run dev
```
