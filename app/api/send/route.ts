import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
    console.log(name, email, message);
    console.log(process.env.RESEND_API_KEY);
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',  // You can use a default Resend email or your own
      to: 'ajaysaran.24cs@licet.ac.in',  // Your email to receive contact form messages
      subject: `Contact Form: ${name}`,
      html: `
        <h4>From your PortFolio</h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3><strong>Message:</strong> ${message}</h3>
      `,
    });

    return NextResponse.json(data);
 
}

