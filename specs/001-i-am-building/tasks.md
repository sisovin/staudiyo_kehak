# Tasks: Build Responsive Modern Website for StaudiyoKehak

**Input**: Design documents from `/specs/001-i-am-building/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/

## Execution Flow (main)

```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `app/`, `components/`, `lib/`, `prisma/`, `tests/` at repository root
- Adjust based on plan.md structure

## Phase 3.1: Setup

- [x] T001 Create Next.js project structure per implementation plan
- [x] T002 Install Next.js 15.5, React 19.1, and core dependencies
- [x] T003 [P] Set up shadcn/ui components and Tailwind CSS v4.1
- [x] T004 [P] Configure Prisma v6 with MongoDB schema
- [x] T005 [P] Set up testing tools: Vitest, React Testing Library, Playwright
- [x] T006 [P] Configure linting and formatting tools (ESLint, Prettier)

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3

**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**

- [x] T007 [P] Contract test for user signup API in tests/contract/test-user-signup.ts
- [x] T008 [P] Contract test for create post API in tests/contract/test-create-post.ts
- [x] T009 [P] Integration test for homepage visit and hero display in tests/integration/test-homepage.ts
- [x] T010 [P] Integration test for sign-up flow in tests/integration/test-signup-flow.ts
- [x] T011 [P] E2E test for responsive design across devices in tests/e2e/test-responsive.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)

- [x] T012 [P] Create User Prisma model in prisma/schema.prisma
- [x] T013 [P] Create Post Prisma model in prisma/schema.prisma
- [x] T014 [P] Create Schedule Prisma model in prisma/schema.prisma
- [x] T015 [P] Create Template Prisma model in prisma/schema.prisma
- [x] T016 Implement user signup API endpoint in app/api/auth/signup/route.ts
- [x] T017 Implement create post API endpoint in app/api/posts/route.ts
- [x] T018 Create root layout component in app/layout.tsx
- [x] T019 Create header component in components/layout/Header.tsx
- [x] T020 Create footer component in components/layout/Footer.tsx
- [x] T021 Create hero section component in components/features/Hero.tsx
- [x] T022 Create features grid component in components/features/Features.tsx
- [x] T023 Create CTA component in components/features/CTA.tsx
- [x] T024 Create documentation pages in app/docs/ directory
- [x] T025 Create auth placeholder pages in app/auth/ directory

## Phase 3.4: Integration

- [x] T026 Connect Prisma client to MongoDB in lib/prisma/client.ts
- [x] T027 Set up authentication middleware in lib/auth/middleware.ts
- [x] T028 Configure TanStack Query provider in app/providers.tsx
- [x] T029 Implement responsive design utilities in lib/utils/responsive.ts

## Phase 3.5: Polish

- [x] T030 [P] Unit tests for hero component in tests/unit/test-hero.tsx
- [x] T031 [P] Unit tests for features component in tests/unit/test-features.tsx
- [x] T032 [P] Performance optimization for images and loading in components/
- [x] T033 [P] Update README.md with project documentation
- [x] T034 [P] Accessibility audit and fixes

## Dependencies

- Setup tasks (T001-T006) before all other tasks
- Test tasks (T007-T011) before implementation tasks (T012-T025)
- Model tasks (T012-T015) before API tasks (T016-T017)
- Layout tasks (T018-T020) before feature components (T021-T023)
- Integration tasks (T026-T029) after core implementation
- Polish tasks (T030-T034) after integration

## Parallel Execution Examples

Tasks marked [P] can run in parallel as they operate on different files:

**Setup Phase Parallel Group:**

```
T003: Set up shadcn/ui
T004: Configure Prisma
T005: Set up testing tools
T006: Configure linting
```

**Test Phase Parallel Group:**

```
T007: Contract test user signup
T008: Contract test create post
T009: Integration test homepage
T010: Integration test signup flow
T011: E2E test responsive
```

**Model Creation Parallel Group:**

```
T012: User model
T013: Post model
T014: Schedule model
T015: Template model
```

**Polish Phase Parallel Group:**

```
T030: Unit test hero
T031: Unit test features
T032: Performance optimization
T033: Update docs
T034: Accessibility audit
```

To execute in parallel, run multiple tasks simultaneously where dependencies allow.
