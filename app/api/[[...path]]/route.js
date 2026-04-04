import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email to the portfolio owner
    // Note: Since you are on Resend free tier/test mode, you MUST send to the verified email (irishm0702@gmail.com)
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'irishm0702@gmail.com', // Must be the verified Resend account email!
      replyTo: email,                   // If you reply, it goes to the submitter
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #3B82F6; margin-bottom: 5px; }
              .value { background: white; padding: 15px; border-radius: 5px; border-left: 3px solid #3B82F6; }
              .message-box { background: white; padding: 20px; border-radius: 5px; border-left: 3px solid #8B5CF6; white-space: pre-wrap; }
              .footer { text-align: center; margin-top: 20px; padding-top: 20px; border-top: 2px solid #e0e0e0; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field"><div class="label">From:</div><div class="value">${name}</div></div>
                <div class="field"><div class="label">Email:</div><div class="value">${email}</div></div>
                <div class="field"><div class="label">Subject:</div><div class="value">${subject}</div></div>
                <div class="field"><div class="label">Message:</div><div class="message-box">${message}</div></div>
                <div class="footer">
                  <p>This email was sent from your portfolio contact form</p>
                  <p>Reply directly to this email to respond to ${name}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (ownerError) {
      console.error('Resend error (owner):', ownerError);
      return NextResponse.json(
        { error: 'Failed to send message to owner' },
        { status: 500 }
      );
    }

    // Attempt to send an auto-reply acknowledgment to the submitter
    // (Note: With Resend free tier, sending to unverified emails from a test domain might fail, 
    // but we initiate it here so it works fully if the domain is verified or limit is lifted)
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // Use a verified domain if you add one to Resend
        to: email,                     // Reaches the other party
        replyTo: 'prixmishra090311@gmail.com', // If they reply to auto-responder, it goes to you
        subject: `Thank you for reaching out! Re: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h2 style="margin: 0;">Message Received!</h2>
            </div>
            <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
              <p>Hi ${name},</p>
              <p>Thank you for reaching out. I have received your message regarding <strong>"${subject}"</strong> and will get back to you as soon as possible.</p>
              <br/>
              <p>Best regards,</p>
              <p><strong>Priya Mishra</strong></p>
              <p>Full-Stack Developer</p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
              <p style="font-size: 12px; color: #666;"><em>You can reply directly to this email if you need to add anything else.</em></p>
            </div>
          </div>
        `
      });
    } catch (e) {
      // Catch error silently in case of unverified domains preventing the auto-reply
      console.error('Failed to send auto-reply to submitter:', e);
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully',
        emailId: ownerData?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Contact API endpoint. Use POST to send messages.' },
    { status: 200 }
  );
}