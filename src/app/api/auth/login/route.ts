import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {

  const { username, password } = await request.json();
  
  const validUsername = process.env.ADMIN_USERNAME || 'some-user';
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
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Login failed' }, 
      { status: 500 }
    );
  }
} 


