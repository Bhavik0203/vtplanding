import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, consent, source } = data;

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'foresightrealvisionpvt.digital@gmail.com',
        pass: 'yrdtenvzojjpwydz',
      },
    });

    const mailOptions = {
      from: '"VTP Realty Landing Page" <foresightrealvisionpvt.digital@gmail.com>',
      to: 'foresightrealvisionpvt.digital@gmail.com',
      subject: `New Lead - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #000; border-bottom: 2px solid #D4F757; padding-bottom: 10px;">New Contact Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email || 'N/A'}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Consent Given:</strong> ${consent ? 'Yes' : 'No'}</p>
          <p><strong>Source:</strong> ${source || 'Website Form'}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
