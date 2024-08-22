/* eslint-disable import/no-named-as-default */
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import pb from '@/lib/pocketbase';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log('form:', { email, password });

    const result = await pb.authenticate(email, password);
    const { record, token } = result;
    record.token = token;
    cookies().set('pb_auth', pb.client.authStore.exportToCookie());

    return NextResponse.json(record);
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
