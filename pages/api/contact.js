import { mailOptions, transporter } from "@/config/nodemailer";
import { SITENAME } from "@/data";

export default async function handler(req, res) {
  const data = req.body;
  if (!data) throw Error({ message: "Bad Request!!!" });
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Message Entry From ${SITENAME}`,
      text: "This a test",
      html: `<h3>New Message From ${data.name}</h3><p><b>Message:</b><br>${data.message}</p><p><b>Email:</b> ${data.email}</p><p><b>Phone:</b> ${data?.phone}</p>`,
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false });
  }
}
