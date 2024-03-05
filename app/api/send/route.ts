import { EmailTemplate } from "@/components/email-Templates";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const content = formData.get("content") as string;
  const file = formData.get("file") as File;
  
  console.log(username, content, subject,file,email);

  const buffer =  Buffer.from ( await file.arrayBuffer());
 

  try{

    const {data , error} = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["figma.works826@gmail.com"],
      subject: subject,
      react: EmailTemplate({
        username,
        email, 
        content,
      }) as React.ReactElement,
      attachments: [{filename: file.name, content: buffer }],
    });
    if(error){
      return NextResponse.json({ error });
    }
    return NextResponse.json({data});
  }catch(error){
    return NextResponse.json({error});
  }
}