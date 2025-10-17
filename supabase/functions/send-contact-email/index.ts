import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  full_name: string;
  email_address: string;
  phone_number: string;
  highest_qualification?: string;
  current_profession?: string;
  professional_experience?: string;
  migrate_to?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received contact form submission:", data);

    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.full_name}</p>
      <p><strong>Email:</strong> ${data.email_address}</p>
      <p><strong>Phone:</strong> ${data.phone_number}</p>
      ${data.highest_qualification ? `<p><strong>Qualification:</strong> ${data.highest_qualification}</p>` : ''}
      ${data.current_profession ? `<p><strong>Profession:</strong> ${data.current_profession}</p>` : ''}
      ${data.professional_experience ? `<p><strong>Experience:</strong> ${data.professional_experience}</p>` : ''}
      ${data.migrate_to ? `<p><strong>Migrate To:</strong> ${data.migrate_to}</p>` : ''}
    `;

    const emailResponse = await resend.emails.send({
      from: "GRCS Contact Form <onboarding@resend.dev>",
      to: ["info@grcs.world"],
      subject: `New Contact Form Submission from ${data.full_name}`,
      html: emailHtml,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
