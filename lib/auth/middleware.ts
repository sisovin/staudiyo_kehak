import { NextRequest, NextResponse } from 'next/server';

export interface AuthUser {
    id: string;
    email: string;
    name?: string;
}

/**
 * Authentication middleware to verify user tokens
 * @param request - The incoming request
 * @returns The authenticated user or null if not authenticated
 */
export async function authenticateRequest(request: NextRequest): Promise<AuthUser | null> {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    const token = authHeader.substring(7);

    // TODO: Implement JWT token verification
    // For now, return null to indicate authentication is not fully implemented
    // In production, decode and verify the JWT token here

    if (token === 'mock-token') {
        return {
            id: '507f1f77bcf86cd799439011',
            email: 'mock@example.com',
            name: 'Mock User',
        };
    }

    return null;
}

/**
 * Middleware to protect API routes
 * @param handler - The route handler function
 * @returns The wrapped handler with authentication check
 */
export function withAuth(
    handler: (request: NextRequest, user: AuthUser) => Promise<NextResponse>
) {
    return async (request: NextRequest): Promise<NextResponse> => {
        const user = await authenticateRequest(request);

        if (!user) {
            return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
        }

        return handler(request, user);
    };
}

/**
 * Rate limiting configuration
 */
export const RATE_LIMITS = {
    SIGNUP: {
        maxAttempts: 5,
        windowMs: 15 * 60 * 1000, // 15 minutes
    },
    LOGIN: {
        maxAttempts: 10,
        windowMs: 15 * 60 * 1000, // 15 minutes
    },
    API: {
        maxAttempts: 100,
        windowMs: 15 * 60 * 1000, // 15 minutes
    },
};
