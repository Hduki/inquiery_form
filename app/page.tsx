
import MailForm from "@/components/MailForm/MailForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useForm } from "react-hook-form";

export default function Home() {



  return (
    <main className="flex min-h-screen flex-col  p-24">
      <div>
        <h2 className="text-2xl font-semibold mt-10 mb-4">お問い合わせフォーム</h2>
    <MailForm/>
        </div>
    </main>
  );
}
