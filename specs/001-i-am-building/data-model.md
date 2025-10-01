# Data Model: Build Responsive Modern Website for StaudiyoKehak

## Overview

The website requires basic data models for user authentication and content management placeholders. Since this is primarily a landing/documentation site, the models are minimal and focused on future functionality.

## Prisma Schema

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  email     String   @unique
  password  String   // Hashed with Argon2
  name      String?
  preferences Json?  // AI settings, etc.
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  posts     Post[]
  templates Template[]

  @@map("users")
}

model Post {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  content   String
  status    PostStatus @default(DRAFT)
  userId    String   @db.ObjectId
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  schedule  Schedule?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("posts")
}

model Schedule {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  postId    String   @unique @db.ObjectId
  post      Post     @relation(fields: [postId], references: [id], onDelete: Cascade)
  platform  String   // e.g., "instagram", "twitter"
  scheduledAt DateTime
  recurrence String? // e.g., "daily", "weekly"
  createdAt DateTime @default(now())

  @@map("schedules")
}

model Template {
  id        String   @id @default(auto()) @map("_id") @db.ObjectId
  name      String
  prompt    String   // AI prompt template
  userId    String   @db.ObjectId
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  createdAt DateTime @default(now())

  @@map("templates")
}

enum PostStatus {
  DRAFT
  SCHEDULED
  PUBLISHED
}
```

## Model Relationships

- User has many Posts and Templates
- Post belongs to User, has one Schedule
- Schedule belongs to Post
- Template belongs to User

## Notes

- Using MongoDB with Prisma v6 for flexible schema
- Passwords stored as hashed strings
- Preferences stored as JSON for extensibility
- Minimal fields to support basic functionality placeholders
