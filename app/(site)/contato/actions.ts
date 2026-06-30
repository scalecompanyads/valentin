"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
} | null;

export async function submitContact(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nome = formData.get("nome")?.toString().trim();
  const telefone = formData.get("telefone")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const area = formData.get("area")?.toString().trim();
  const mensagem = formData.get("mensagem")?.toString().trim();

  if (!nome || !telefone || !mensagem) {
    return { status: "error", message: "Preencha os campos obrigatórios." };
  }

  /*
   * TODO: integrar com serviço de e-mail.
   * Opções sugeridas:
   *   1. Resend (https://resend.com) — instalar com: npm install resend
   *      import { Resend } from 'resend'
   *      const resend = new Resend(process.env.RESEND_API_KEY)
   *      await resend.emails.send({ from: '...', to: siteConfig.email, ... })
   *
   *   2. Formspree — sem servidor próprio, apenas apontar o action do form.
   *
   * Enquanto o serviço não estiver configurado, os dados ficam logados abaixo.
   * REMOVER o console.log em produção.
   */
  console.log("[Contato] Nova mensagem:", { nome, telefone, email, area, mensagem });

  return { status: "success" };
}
