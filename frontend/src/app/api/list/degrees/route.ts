import pb from '@/lib/pocketbase';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const degress = await pb.getDegrees();
    return NextResponse.json(degress);
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || err.toString() }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
