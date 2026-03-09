import express from "express";
import cors from "cors";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);
console.log(
  "API Key loaded:",
  process.env.RESEND_API_KEY ? "YES" : "NO - KEY MISSING",
);

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "vivanchauhan@zohomail.in",
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 32px;">
          <h2 style="color: #FF6B2B; margin-bottom: 24px;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top: 16px;"><strong>Message:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 4px; line-height: 1.6;">${message}</p>
          <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999;">Sent from your portfolio contact form</p>
        </div>
      `,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend error:", err.message);
    console.error("Full error:", JSON.stringify(err, null, 2));
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
