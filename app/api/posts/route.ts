import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma/client';

export async function POST(request: NextRequest) {
    try {
        // Check authentication
        const authHeader = request.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
        }

        // For now, we'll use a mock user ID
        // In production, decode JWT token to get user ID
        const mockUserId = '507f1f77bcf86cd799439011'; // Mock MongoDB ObjectId

        const body = await request.json();
        const { content, status } = body;

        // Validate content
        if (!content || content.trim() === '') {
            return NextResponse.json({ error: 'Content cannot be empty' }, { status: 400 });
        }

        // Create post
        const post = await prisma.post.create({
            data: {
                content,
                status: status || 'DRAFT',
                userId: mockUserId,
            },
        });

        return NextResponse.json({ post }, { status: 201 });
    } catch (error) {
        console.error('Create post error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
