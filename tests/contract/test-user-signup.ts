import { describe, it, expect } from 'vitest';

describe('POST /api/auth/signup - Contract Test', () => {
    const API_URL = 'http://localhost:3000/api/auth/signup';

    it('should create a new user with valid data', async () => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'user@example.com',
                password: 'securepassword123',
                name: 'John Doe',
            }),
        });

        expect(response.status).toBe(201);
        const data = await response.json();
        expect(data).toHaveProperty('user');
        expect(data.user).toHaveProperty('id');
        expect(data.user.email).toBe('user@example.com');
        expect(data.user.name).toBe('John Doe');
        expect(data).toHaveProperty('message', 'User created successfully');
    });

    it('should return 400 for invalid email format', async () => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'invalid-email',
                password: 'securepassword123',
            }),
        });

        expect(response.status).toBe(400);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'Invalid email format');
    });

    it('should return 400 for weak password', async () => {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'user@example.com',
                password: 'weak',
            }),
        });

        expect(response.status).toBe(400);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'Password must be at least 8 characters');
    });

    it('should return 409 if user already exists', async () => {
        // First create a user
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'existing@example.com',
                password: 'securepassword123',
            }),
        });

        // Try to create the same user again
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: 'existing@example.com',
                password: 'securepassword123',
            }),
        });

        expect(response.status).toBe(409);
        const data = await response.json();
        expect(data).toHaveProperty('error', 'User with this email already exists');
    });
});
