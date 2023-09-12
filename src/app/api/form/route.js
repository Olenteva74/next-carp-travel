import { generateText } from "@/utils/generateText";
import { transporter, mailOption } from "@/utils/nodemailer";

export async function POST(req) {
  const body = await req.json();
  transporter.sendMail({ ...mailOption, text: generateText(body) });
  return new Response("Successful");
}
