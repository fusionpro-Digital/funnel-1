import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const DEFAULT_RECIPIENTS = [
  "shahrairfardows@gmail.com",
  "christian@fusionprodigital.com",
];

// Generous for a lead form, tight enough that nobody can mail a novel.
const MAX_LENGTHS = {
  fullName: 120,
  email: 254,
  phone: 40,
  company: 200,
  service: 120,
  message: 4000,
} as const;

type Field = keyof typeof MAX_LENGTHS;

function readField(body: Record<string, unknown>, name: Field) {
  const value = body[name];
  return typeof value === "string"
    ? value.trim().slice(0, MAX_LENGTHS[name])
    : "";
}

/** Everything the visitor typed lands inside an HTML email, so escape it. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set, so the contact form cannot send email.",
    );
    return NextResponse.json(
      {
        error:
          "The contact form is not available right now. Please email us directly.",
      },
      { status: 500 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = readField(body, "fullName");
  const email = readField(body, "email");
  const phone = readField(body, "phone");
  const company = readField(body, "company");
  const service = readField(body, "service");
  const message = readField(body, "message");

  if (!fullName || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email, and phone number are required." },
      { status: 400 },
    );
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const resend = new Resend(apiKey);

    const toEmails = process.env.CONTACT_RECIPIENT_EMAILS
      ? process.env.CONTACT_RECIPIENT_EMAILS.split(",").map((e) => e.trim())
      : DEFAULT_RECIPIENTS;

    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      "FusionPro Digital <contact@fusionprodigital.com>";

    const emailSubject = `🚀 New Lead Submission: ${fullName} (${service || "General Inquiry"})`;

    const safe = {
      fullName: escapeHtml(fullName),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      company: escapeHtml(company) || "Not provided",
      service: escapeHtml(service) || "Not specified",
      message: escapeHtml(message) || "No detailed message provided.",
    };

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
              <div class="value">${safe.fullName}</div>
            </div>

            <div class="field-group">
              <div class="label">Work Email</div>
              <div class="value"><a href="mailto:${safe.email}" style="color: #c084fc; text-decoration: none;">${safe.email}</a></div>
            </div>

            <div class="field-group">
              <div class="label">Phone Number</div>
              <div class="value"><a href="tel:${safe.phone}" style="color: #c084fc; text-decoration: none;">${safe.phone}</a></div>
            </div>

            <div class="field-group">
              <div class="label">Company / Website</div>
              <div class="value">${safe.company}</div>
            </div>

            <div class="field-group">
              <div class="label">Selected Service / Area</div>
              <div class="value" style="color: #e9d5ff; font-weight: 600;">${safe.service}</div>
            </div>

            <div class="field-group">
              <div class="label">Goals / Bottlenecks Message</div>
              <div class="message-box">
                <div class="value" style="white-space: pre-wrap;">${safe.message}</div>
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
      // If the custom domain is not verified yet, fall back to Resend's shared sender.
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
        { error: "We could not send your message. Please try again or email us directly." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error in /api/contact route:", err);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or email us directly." },
      { status: 500 },
    );
  }
}
