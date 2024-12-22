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

    const msg = {
      to: 'assaf.manzur@gmail.com', // Your recipient email
      from: 'assaf.manzur@gmail.com', // Use a verified sender email
      subject: 'New Contact Form Submission',
      text: `Message from: ${name} <${email}>\n\n${message}`, // Include sender's email in the text body
      html: `<p>Message from: ${name} &lt;${email}&gt;</p><p>${message}</p>`, // Include sender's email in the HTML body
    };

    await sgMail.send(msg)
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error: unknown) {
    console.error('Error handling contact form submission:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to send message', details: errorMessage }, { status: 500 });
  }
} 