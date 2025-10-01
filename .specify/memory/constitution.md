# StaudiyoKehak Constitution

<!-- Sync Impact Report
Version change: 0.0.0 → 1.0.0
Modified principles: None (initial creation)
Added sections: All core principles, Technology and Deployment Standards, Development and Quality Assurance Workflow
Removed sections: None
Templates requiring updates: .specify/templates/plan-template.md (populate Constitution Check gates), .specify/templates/tasks-template.md (ensure task categories reflect principles)
Follow-up TODOs: None
-->

## Core Principles

### AI-Driven Content Creation

Every content generation feature must integrate AI technologies to produce high-quality, engaging social media posts. AI endpoints are placeholders that must be developed with ethical considerations, reliability, and user customization options for tone, length, and platform-specific content.

### Cross-Platform Scheduling

The application must enable scheduling and publishing to multiple social media platforms from a unified interface, with platform-specific optimizations, recurring post support, and conflict detection to ensure seamless multi-platform management.

### Test-First Development

All code must follow TDD principles: write tests first, ensure they fail, implement code to pass, then refactor. Comprehensive testing suite including unit tests (Vitest), component tests (React Testing Library), and E2E tests (Playwright) is mandatory for all features.

### Secure User Management

Authentication and authorization must use industry-standard security practices: Argon2 for password hashing, secure session management via cookies or JWT, rate limiting on authentication endpoints, and role-based access control to protect user data and privacy.

### Scalable and Maintainable Architecture

Utilize Next.js App Router for server-side rendering and API routes, Tanstack Query for efficient state management and caching, Prisma ORM with MongoDB for type-safe database operations, ensuring performance, scalability, and ease of maintenance across the full-stack application.

## Technology and Deployment Standards

Frontend built with Next.js 15.5, React 19.1, shadcn/ui for components, and Tailwind CSS v4.1 for styling. Backend via Next.js API routes on Node.js 22+. Database: Prisma v6 with MongoDB for flexible, scalable data storage. Deployment: Vercel for server-side rendering optimization and GitHub integration, with Docker compatibility for custom hosting. All components must be annotated with user impact, business purpose, and technical role for clarity and onboarding.

## Development and Quality Assurance Workflow

Code reviews are mandatory for all pull requests to ensure compliance with principles. Use Git for version control with feature branches. CI/CD pipelines via Vercel or GitHub Actions for automated testing and deployment. Follow semantic versioning for releases. Maintain a living style guide for UI consistency and document AI prompt strategies as they evolve.

## Governance

This constitution governs all project decisions and supersedes other practices. Amendments require consensus from core contributors, documented justification, and migration plan if needed. Versioning follows semantic rules: MAJOR for backward-incompatible changes, MINOR for new features, PATCH for fixes. Compliance is verified during code reviews, testing gates, and deployment approvals.

**Version**: 1.0.0 | **Ratified**: 2025-10-01 | **Last Amended**: 2025-10-01
