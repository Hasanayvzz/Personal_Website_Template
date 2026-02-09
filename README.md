# Modern Developer Personal Website Template

A clean, scalable, and maintainable portfolio template for developers.

This project provides a ready-to-use starting point for developers building a personal portfolio website. Instead of dealing with initial setup and configuration, you can focus directly on adding your content. Built with clean code structure, performance, and long-term maintainability in mind. Easy to extend as your portfolio grows.

---

## Features

- **Next.js (App Router)**  
  Modern React architecture with built-in routing, performance optimizations, and SEO support.

- **TypeScript**  
  Strong typing for better code quality and developer experience.

- **SCSS Modules**  
  Modular and maintainable styling with clear separation of concerns.

- **Dark / Light Mode**  
  Theme support implemented with global state management and CSS variables.

- **Global State Management (Zustand)**  
  Lightweight and simple state management for UI and application-wide states such as theme and language.

- **Internationalization (i18n)**  
  Multi-language support with a scalable structure for adding new languages.

- **Atomic Design Architecture**  
  UI components organized as atoms, molecules, and organisms for consistency and reusability.

- **Subtle Animations**  
  Minimal and smooth animations using Framer Motion.

---

## Tech Stack

- Framework: Next.js
- Language: TypeScript
- Styling: SCSS Modules
- State Management: Zustand
- Animations: Framer Motion
- Icons: React Icons, Lucide

---

## Folder Structure

```txt
src/
├── app/              # Next.js App Router pages, layouts, and routing logic
├── components/
│   ├── effects/      # Visual effects and animations (Parallax, StarField, etc.)
│   ├── layout/       # Layout components (Navbar, Footer, wrappers)
│   ├── providers/    # Application-level providers (Theme, i18n, State)
│   ├── sections/     # Page sections (Hero, About, Skills, Projects)
│   └── ui/           # Reusable atomic UI components (Button, Input, Cursor)
├── hooks/            # Custom React hooks for shared logic
└── styles/           # Global styles, variables, and theme definitions
```

## How to use it

1.  **Clone it:**

    ```bash
    git clone https://github.com/Hasanayvzz/Personal_Website_Template.git my-website
    cd my-website
    ```

2.  **Install the stuff:**

    ```bash
    yarn install
    # or npm install
    ```

3.  **Run it:**
    ```bash
    yarn dev
    ```
    Open `http://localhost:3000` and you're good to go.

---

## Customizing it

I tried to keep things organized so you don't have to hunt for files.

- **Change your name/bio:** Check `src/components/sections/Hero/Hero.tsx` and `About.tsx`.
- **Update your skills:** Go to `src/components/sections/Skills/Skills.tsx`. There's a `skills` array there—just add your own tech stack and pick your brand colors.
- **Add your projects:** Look at `src/components/sections/Projects/Projects.tsx`.
- **Styles:** Global variables (colors, fonts) are in `src/app/globals.scss`.

---

## Contributing

If you find a bug or think something could be better, feel free to open a PR. I'm always open to improvements.

Cheers,
[Hasan]
