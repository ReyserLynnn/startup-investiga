import pb from '@/lib/pocketbase';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      username,
      email,
      password,
      passwordConfirm,
      name,
      lastname,
      phone,
      institution,
      degree,
    } = await request.json();

    await pb.register(
      username,
      email,
      password,
      passwordConfirm,
      name,
      lastname,
      phone,
      institution,
      degree,
    );

    const authResult = await pb.authenticate(email, password);
    const { record } = authResult;

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
