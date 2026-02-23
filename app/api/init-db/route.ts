import { NextResponse } from 'next/server';
import { createPanoramasTable } from '@/lib/db';

export async function GET() {
  try {
    const result = await createPanoramasTable();
    
    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Database initialized successfully',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to initialize database',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Database initialization error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
