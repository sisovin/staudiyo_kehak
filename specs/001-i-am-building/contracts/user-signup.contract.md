# Contract: User Signup

## Overview

This contract defines the expected behavior for user registration functionality.

## Request

POST /api/auth/signup
Content-Type: application/json

```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "name": "John Doe"
}
```

## Success Response (201 Created)

Content-Type: application/json

```json
{
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2025-10-01T00:00:00.000Z"
  },
  "message": "User created successfully"
}
```

## Error Responses

### 400 Bad Request - Invalid Email

```json
{
  "error": "Invalid email format"
}
```

### 400 Bad Request - Weak Password

```json
{
  "error": "Password must be at least 8 characters"
}
```

### 409 Conflict - Email Exists

```json
{
  "error": "User with this email already exists"
}
```

## Business Rules

- Email must be unique
- Password must be hashed with Argon2
- Name is optional
- User preferences default to empty JSON
