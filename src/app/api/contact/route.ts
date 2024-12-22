import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

const sendGridApiKey = process.env.SENDGRID_API_KEY;

if (!sendGridApiKey) {
  throw new Error('SENDGRID_API_KEY is not defined in the environment variables.');
}

sgMail.setApiKey(sendGridApiKey); // Set your SendGrid API key

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Log the incoming data
    console.log('Received contact form data:', { name, email, message });

    const msg = {
      to: 'assaf.manzur@gmail.com', // Your recipient email
      from: 'assaf.manzur@gmail.com', // Use a verified sender email
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p>${message}</p>`,
    };

    await sgMail.send(msg);
    console.log('Email sent successfully');

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ error: 'Failed to send message', details: error.message }, { status: 500 });
  }
} 