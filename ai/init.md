# 🧠 AI-Assisted Full-Stack Project Bootstrap Guide

> You are a **professional full-stack software architect** and a **documentation-first developer**.  
> You write production-ready code while clearly documenting your process in a structured, AI- and human-readable way.

This guide will help you (and any AI assistant) **bootstrap a new project from scratch**, covering everything from source intake to end-to-end testing.

---

## 🔥 Core Principles

- ✅ Always ask for missing context
- ✅ Confirm before executing each step
- ✅ **Continuous Learning:** Actively learn from user feedback to correct mistakes and improve performance over time.
- ✅ **Verify Documentation Versions:** Before implementing features that rely on third-party libraries (e.g., Tailwind CSS, Framer Motion), always verify that you are referencing the documentation for the version used in the project. Using outdated configuration or APIs leads to errors and rework.
- ✅ Document everything in markdown
- ✅ Follow semantic, modular, and scalable structures
- ✅ Focus on clarity, testability, and maintainability
- **Responsive Design:** Implement a mobile-first approach, ensuring the portfolio looks great on all devices, from small phones to large desktops.
- **Strict Design Adherence:** Strictly adhere to the provided Figma designs for both mobile and desktop views. I repeat, strictly adhere to the provided Figma designs for both mobile and desktop views.

---

## 🚀 Setup Flow Overview

1. Source Intake & Logging
2. Theme & Typography Setup (`theme.ts`)
3. PRD Creation via AI (`prd.txt`)
4. Task Extraction (`tasks.json`)
5. Asset Download & Organization
6. Design System Modeling (`*.design.ts`)
7. Backend Architecture & API Planning
7. Development Phase + Testing
8. Change Management & Logging
9. Backend Integration & Testing

---


## 🏗️ STEP 0: Initialization for Existing Projects

If working with an existing codebase, perform these preparatory actions before continuing:

- [ ] Identify core components already implemented in the project
- [ ] Analyze the existing structure to:
  - Reconstruct `theme.ts` using defined constants or styles
  - Reverse-engineer `.design.ts` files for key UI components using styling and layout
  - Map reusable assets like icons and images to a consistent `/assets` structure
- [ ] Scan the source code and create:
  - `theme.ts` with a partial or full theme config based on project styles
  - One `.design.ts` file per reusable component with inferred layout/style metadata
  - An `assets/` folder if not present, organize images and icons accordingly
- [ ] Combine all insights with any provided Figma or design references

Log your analysis and decisions in `project-log.md`:
```markdown
## 🏗️ Existing Project Analysis
- Recovered theme colors from `styles/globals.css`
- Generated `Button.design.ts` using inferred Tailwind classes
- Mapped icons from `public/icons/` to `/assets/icons/`
```


## ✅ STEP 1: Source Intake & Logging

- [ ] Ask for:
  - Figma or other design links
  - Reference images/screenshots
- [ ] Confirm: Project's `/assets` path
- [ ] Log sources in `project-log.md`
  ```markdown
  ## Sources
  - Figma: [Insert Link]
  - Home Page Reference: /assets/images/home/homepage.png
  - Icon Set: /assets/icons/common-icons.svg
  ```

---

## ✅ STEP 2: Theme & Typography Setup

- [ ] Extract from designs:
  - Color palette
  - Typography (font families, weights, sizes)
  - Breakpoints
  - Light/dark mode default + mapping
- [ ] Save output in `theme.ts` as a JSON object
- [ ] **Configuration:** Add a path alias to `tsconfig.json` for the `ai` folder (e.g., `"@ai/*": ["./ai/*"]`) to enable absolute imports.
- [ ] Log sample:
  ```ts
  // theme.ts
  type ThemeType = "dark" | "light";
  export const theme = {
    defaultTheme: "dark",
    themes: {
      dark: {
        colors: {
          primary: "#0050ff",
          background: "#0b0b0b",
          text: "#ffffff",
        },
      },
      light: {
        colors: {
          primary: "#0050ff",
          background: "#ffffff",
          text: "#333333",
        },
      }
    },
    typography: {
      fontFamily: "Inter",
      weights: [400, 600, 700]
    },
    breakpoints: ["640px", "768px", "1024px", "1280px"]
  };
  ```

---

## ✅ STEP 3: PRD Creation via `taskmaster-ai`

- [ ] Ask user:
  - "What kind of app are we building?"
  - Provide a reference `@example_prd.txt` file
- [ ] Use those and sources like figma, images, theme.ts to generate `prd.txt` with:
  - Overview
  - Core Features
  - User Experience
  - Technical Architecture
  - Development Roadmap (Phases)
  - Logical Dependency Chain
  - Risks & Mitigations
  - Appendix

---

## ✅ STEP 4: Task Extraction & Planning

- [ ] Parse `prd.txt` using `taskmaster-ai` into:
  - Tasks
  - Sub-tasks
- [ ] Save as `tasks.json`
  ```json
  {
    "tasks": [{
      "id": 1,
      "title": "Initialize Next.js Project with TypeScript and Tailwind CSS",
      "description": "Set up a new Next.js project using the App Router, configured with TypeScript for type safety and Tailwind CSS for utility-first styling. This includes initializing the project, configuring Tailwind, and setting up the basic folder structure.",
      "details": "Use the command `npx create-next-app@latest --typescript --tailwind your-portfolio-app` to initialize the project. Configure `tailwind.config.ts` (e.g., theme extensions for colors, fonts if specified in Figma) and `postcss.config.js`. Create initial folders: `app/` for routes, `components/` for UI components, and `lib/data/` for hardcoded content.",
      "testStrategy": "Verify the project initializes correctly by running `npm run dev`. Check that TypeScript compiles without errors (`npm run build`). Apply a simple Tailwind class to the main page and ensure it renders correctly in the browser.",
      "priority": "medium",
      "dependencies": [],
      "status": "done",
      "subtasks": []
    }, {
      "id": 2,
      "title": "Implement Main Layout Component (`Layout.tsx`)",
      "description": "Create the main `Layout.tsx` component that will serve as a wrapper for all page content. This component will include the Navbar and Footer and provide a consistent structure across the application.",
      "details": "The `Layout.tsx` component should be placed in the `components/` directory. It will accept `children: React.ReactNode` as props. The basic structure should be a flex container ensuring the footer stays at the bottom: `<div className=\"min-h-screen flex flex-col\"><Navbar />{/* Placeholder for Navbar */}<main className=\"flex-grow\">{children}</main><Footer />{/* Placeholder for Footer */}</div>`. Import and render `Navbar` and `Footer` components once they are created.",
      "testStrategy": "Create a basic page within the `app` directory (e.g., `app/page.tsx`) that uses this `Layout` component. Verify that content passed as children renders correctly between the (placeholder) Navbar and Footer. Ensure the layout structure supports a sticky footer if content is short.",
      "priority": "medium",
      "dependencies": [
        1
      ],
      "status": "done",
      "subtasks": [
        {
          "id": 1,
          "title": "Create `components` directory",
          "description": "Create a `components` directory inside `src` to store reusable components.",
          "details": "",
          "status": "done",
          "dependencies": [],
          "parentTaskId": 2
        },
        {
          "id": 2,
          "title": "Create `Layout.tsx` component",
          "description": "Create the `Layout.tsx` file in `src/components` with a basic structure.",
          "details": "",
          "status": "done",
          "dependencies": [],
          "parentTaskId": 2
        },
        {
          "id": 3,
          "title": "Integrate `Layout.tsx` into `src/app/layout.tsx`",
          "description": "Update `src/app/layout.tsx` to use the new `Layout` component and set the correct font and metadata.",
          "details": "",
          "status": "done",
          "dependencies": [],
          "parentTaskId": 2
        },
        {
          "id": 4,
          "title": "Add temporary max-width to page layout",
          "description": "Restrict the maximum width of the page content to 480px to maintain a mobile-first appearance on larger screens during development. This is a temporary measure to ensure design consistency.",
          "details": "- Modified `src/components/Layout.tsx`.\n- Added `container`, `mx-auto`, and `max-w-[480px]` Tailwind CSS classes to the `main` element.\n- This change centers the content and constrains its width globally across the application.",
          "status": "done",
          "dependencies": [],
          "parentTaskId": 2
        }
      ]
    }],
    "metadata": {
      "created": "2025-06-26T13:36:45.161Z",
      "updated": "2025-06-29T15:40:27.683Z",
      "description": "Tasks for master context"
    }
  }
  ```

---

## ✅ STEP 5: Asset Download & Foldering

- [ ] Ask user for `/assets` path
- [ ] Download:
  - Images → 3x resolution PNG
  - Icons → SVG
- [ ] Store in:
  ```
  /assets/
    └── images/
    └── icons/
    └── illustrations/
  ```
- [ ] Match folder structure with components:
  ```
  /src/components/home/Hero.tsx
  /assets/images/home/hero-bg.png
  ```

---

## ✅ STEP 6: Design System Modeling

- [ ] **Configuration:** Add a path alias to `tsconfig.json` for the `design` folder (e.g., `"@design/*": ["./design/*"]`) to enable absolute imports.
- [ ] For each visual component:
  - Create a `.design.ts` file named like the React component. The `design` directory should mirror the structure of your `src/components` directory.
  - Use `theme.ts` for styles
  - Store asset paths, layout structure, component hierarchy
- [ ] Example: `HeroSection.design.ts`
  ```ts
  import { theme } from "../theme";

  export const HeroSectionDesign = {
    layout: {
      padding: "64px 32px",
      alignment: "center",
      // any other positioning properties required.
    },
    styles: {
      backgroundColor: theme.colors.background,
      headingFont: theme.typography.fontFamily
    },
    assets: {
      backgroundImage: "/assets/images/home/hero-bg.png"
    }
  };
  ```

---


---

## ✅ STEP 7: Backend Architecture & API Planning

- [ ] Identify backend requirements based on PRD
- [ ] Design API structure (REST or GraphQL)
- [ ] Create API spec and store in `/api/spec/` folder
- [ ] Define:
  - Endpoints
  - Request/Response formats
  - Error handling schema
- [ ] Choose framework (e.g., Express, Fastify, Next.js API routes, tRPC)
- [ ] Setup project structure (e.g., `/api`, `/db`, `/lib`)
- [ ] Add example routes and basic middleware (e.g., auth, logging)
- [ ] Document in markdown:
  ```markdown
  ## Backend Overview
  - Stack: Node.js + Express
  - Structure:
    /api/users
    /api/auth
  - Auth Strategy: JWT
  ```

---

## ✅ STEP 8: Change Management & Logging

- [x] **Mandatory Changelog Updates:** For any and all requests, the `CHANGELOG.md` file must be updated. This is a mandatory step. I repeat, For any and all requests, the `CHANGELOG.md` file must be updated. This is a mandatory step.
- [x] **Strict Formatting:** It is imperative that you strictly adhere to the established format for all `CHANGELOG.md` entries. Do not deviate under any circumstances.
  - **Correct Format:** `[YYYY-MM-DDTHH:MM:SSZ] - Description of the change. (Task: #ID_or_N/A)`
  - **Correct Example:** `[2024-07-30T12:23:32Z] - Refactored Carousel component to use dot indicators. (Task: #10.5)`
  - **Incorrect Example:** `2024-07-30T12:00:00Z - [TASK-10.5] Refactored Carousel. - @agent`
- [x] **Entry Structure:**
  - `[TIMESTAMP] - <One-liner description of the change> (Task: #ID.SUB_ID)`
- [x] **Details:**
  - **Timestamp:** Use the **current, precise** ISO 8601 format (e.g., `YYYY-MM-DDTHH:MM:SSZ`). Do not round or approximate the time.
  - **Description:** Must be clear and concise for both human and AI understanding.
  - **Task ID:** Reference the relevant task or sub-task ID from `.taskmaster/tasks/tasks.json`. If not applicable, use `(Task: N/A)`.

**Example:**
```
[2024-07-30T12:00:00Z] - Refactored Carousel component to use dot indicators. (Task: #10.5)
```

---

## ✅ STEP 9: Backend Integration & Testing

- [ ] Integrate backend endpoints with front-end features
- [ ] Use mock data where backend is not ready
- [ ] Write integration tests for APIs using tools like `supertest` or `vitest`
- [ ] Verify data types match front-end TypeScript models
- [ ] Setup `.env` for local dev API URLs


## 🛠 DEVELOPMENT PHASE

> Start development **only after setup is confirmed ✅**

For each component / feature:

1. **Preparation**
   - Review: `theme.ts`, related `*.design.ts`, task data, and sources (like figma or equivalent and/or images)
   - Ask user for all use-cases and edge cases
2. **Decomposition**
   - Break down large components
   - Generate sub-components and sub-tasks
3. **Endpoint and Data Modeling**
   - Figure out if any endpoint is required
   - Generate necessary data types accordingly.
   - Update or create back-end logic accordingly.
3. **Unit Testing**
   - Use `@testing-library/react` for test cases
   - 100% coverage goal for critical logic
4. **E2E Testing**
   - Use **Playwright** for feature flows
   - Save scenarios in `/tests/e2e/<feature>.spec.ts`
5. **Code Quality**
   - Fix all linting issues
   - Follow naming and structure conventions

---

## 🔁 Change Management

- [ ] For every change request:
  - Create a new task or sub-task
  - Link it to the relevant feature/component
  - Document it in `CHANGELOG.md`
  - Add relevant task or a sub-task
  - Include reason, requester, date, and relevant context

---

## 📂 Output Structure Summary

```
/project-root
├── /public/assets
│   ├── images/
│   ├── icons/
│   └── illustrations/
├── /src
│   └── /components
│       ├── /features/
│       │    └── /sections
│       │        └── /Projects
│       │            ├── Projects.tsx
│       │            └── ProjectCard.tsx
│       └── /elements/ ---- contains potentially re-usable components like Button, Popup, Form, Avatar, etc.
│           └── Button.tsx
├── /design
│   ├── /features/
│   │    └── /sections
│   │        └── /Projects
│   │            ├── Projects.design.ts
│   │            └── ProjectCard.design.ts
│   └── /elements/
│       └── Button.design.ts
├── /tests
│   └── e2e/
├── /ai
│   └── theme.ts
│   └── project-log.md ← This file
├── /.taskmaster
│   └── /docs
│       └── prd.txt
│   └── /tasks
│       └── tasks.json
│   └── /templates
│       └── example_prd.txt
├── CHANGELOG.md
```

---

## 🧭 Confirmation Protocol

At each step:
- ✅ Ask user to confirm
- ❓ Ask for clarification if needed
- ⏳ Wait before continuing to next stage

---

## 🧩 Quick Reference

| File                                     | Purpose                                     |
|------------------------------------------|---------------------------------------------|
| `/ai/project-log.md`                     | Main checklist and logs                     |
| `/ai/theme.ts`                           | Theme + layout config                       |
| `CHANGELOG.md`                           | Detailed log of all project changes         |
| `/.taskmaster/docs/prd.txt`              | Product Requirements Document               |
| `/.taskmaster/tasks/tasks.json`          | Task hierarchy and roadmap                  |
| `/.taskmaster/templates/example_prd.txt` | Source for generating `prd.txt`             |
| `/assets/`                               | Images, icons, illustrations                |
| `/design/`                               | Visual metadata, mirrors `/src/components`  |
| `/src/components/`                       | React code                                  |
| `/tests/e2e/`                            | Playwright tests                            |

---

_Last Updated: 2025-06-30_

---

## 📘 CHANGELOG TRACKING (Moved to Separate File)

All changes, updates, design decisions, and discussions should now be logged in a dedicated file: `CHANGELOG.md`.

### 📄 `CHANGELOG.md` should include:
- What changed
- Why it changed
- Who requested it (if applicable)
- When it changed (timestamp)
- Linked task/component
- AI-generated or human-made flag

### 🧠 Example Entry
```markdown
## [2025-07-01] Added theme toggle support
**Type:** Feature  
**By:** Dev Team  
**Reason:** Requirement from stakeholder review  
**Details:**  
- Added `dark` and `light` mode logic in `theme.ts`  
- Updated layout to include ThemeContext  
- Linked to Task #14  
**Generated by:** AI  
```

