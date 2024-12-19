import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
  const validUsername = process.env.ADMIN_USERNAME || 'admin';
  const validPassword = process.env.ADMIN_PASSWORD || 'your-secure-password';

  if (username === validUsername && password === validPassword) {
    const response = NextResponse.json({ success: true });
    
    response.cookies.set('admin-token', 'your-secure-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 // 1 hour
    });

    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
} 