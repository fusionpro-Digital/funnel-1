import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_WLScKgE8_5jwgjTAaE7UgPdwZuPziwYYV");

const DEFAULT_RECIPIENTS = [
  "shahrairfardows@gmail.com",
  "christian@fusionprodigital.com",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, company, service, message } = body;

    // Basic validation
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    // Determine recipients
    const toEmails = process.env.CONTACT_RECIPIENT_EMAILS
      ? process.env.CONTACT_RECIPIENT_EMAILS.split(",").map((e) => e.trim())
      : DEFAULT_RECIPIENTS;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "FusionPro Digital <contact@fusionprodigital.com>";

    const emailSubject = `🚀 New Lead Submission: ${fullName} (${service || "General Inquiry"})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #07030c; color: #ffffff; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #120a1f; border: 1px solid #3b0764; border-radius: 16px; padding: 32px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            .header { border-bottom: 1px solid #2e1065; padding-bottom: 20px; margin-bottom: 24px; }
            .brand { color: #a855f7; font-size: 22px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
            .title { color: #ffffff; font-size: 20px; font-weight: 600; margin-top: 8px; }
            .field-group { margin-bottom: 20px; background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 12px; padding: 16px; }
            .label { color: #c084fc; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }
            .value { color: #f3e8ff; font-size: 16px; font-weight: 500; word-break: break-word; }
            .message-box { background-color: rgba(168, 85, 247, 0.08); border-left: 4px solid #a855f7; padding: 14px 16px; border-radius: 0 8px 8px 0; margin-top: 6px; }
            .footer { font-size: 12px; color: #94a3b8; text-align: center; margin-top: 32px; border-top: 1px solid #2e1065; padding-top: 16px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="brand">FusionPro Digital</div>
              <div class="title">New Website Lead Form Submission</div>
            </div>

            <div class="field-group">
              <div class="label">Full Name</div>
              <div class="value">${fullName}</div>
            </div>

            <div class="field-group">
              <div class="label">Work Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #c084fc; text-decoration: none;">${email}</a></div>
            </div>

            <div class="field-group">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${phone}" style="color: #c084fc; text-decoration: none;">${phone}</a></div>
            </div>

            <div class="field-group">
              <div class="label">Company / Website</div>
              <div class="value">${company || "Not provided"}</div>
            </div>

            <div class="field-group">
              <div class="label">Selected Service / Area</div>
              <div class="value" style="color: #e9d5ff; font-weight: 600;">${service || "Not specified"}</div>
            </div>

            <div class="field-group">
              <div class="label">Goals / Bottlenecks Message</div>
              <div class="message-box">
                <div class="value" style="white-space: pre-wrap;">${message || "No detailed message provided."}</div>
              </div>
            </div>

            <div class="footer">
              Sent automatically from <strong>fusionprodigital.com</strong> contact form.
            </div>
          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmails,
      subject: emailSubject,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API Error:", error);
      // If custom domain fails, try sending via onboarding@resend.dev as fallback
      if (error.message && error.message.toLowerCase().includes("domain")) {
        const fallbackRes = await resend.emails.send({
          from: "FusionPro Digital Form <onboarding@resend.dev>",
          to: toEmails,
          subject: emailSubject,
          html: htmlContent,
          replyTo: email,
        });

        if (!fallbackRes.error) {
          return NextResponse.json({ success: true, data: fallbackRes.data });
        }
      }

      return NextResponse.json(
        { error: error.message || "Failed to send email via Resend API" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Error in /api/contact route:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
