"use client";

import { useActionState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { submitContact, type ContactState } from "./actions";

const areas = [
  "Trabalhista",
  "Previdenciário",
  "Consumidor",
  "Administrativo",
  "Outro",
];

const inputClass =
  "w-full bg-white border border-charcoal/20 rounded-sm px-4 py-3 font-sans text-sm text-charcoal placeholder:text-stone/50 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition-colors";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    submitContact,
    null
  );

  if (state?.status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
        <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-navy" />
        </div>
        <p className="font-serif text-navy text-2xl font-medium">
          Mensagem recebida!
        </p>
        <p className="font-sans text-stone text-sm leading-relaxed max-w-sm">
          Em breve nossa equipe entrará em contato. Se preferir falar agora,
          chame no WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-5" noValidate>
      {state?.status === "error" && (
        <p className="font-sans text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3">
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="nome" className="block font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide mb-1.5">
          Nome completo <span className="text-gold">*</span>
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          placeholder="Seu nome"
          className={inputClass}
          disabled={pending}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="telefone" className="block font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide mb-1.5">
            WhatsApp / Telefone <span className="text-gold">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(00) 00000-0000"
            className={inputClass}
            disabled={pending}
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide mb-1.5">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            className={inputClass}
            disabled={pending}
          />
        </div>
      </div>

      <div>
        <label htmlFor="area" className="block font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide mb-1.5">
          Assunto / Área
        </label>
        <select
          id="area"
          name="area"
          className={`${inputClass} appearance-none bg-white`}
          disabled={pending}
          defaultValue=""
        >
          <option value="" disabled>
            Selecione uma área
          </option>
          {areas.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="block font-sans text-xs font-medium text-charcoal/60 uppercase tracking-wide mb-1.5">
          Mensagem <span className="text-gold">*</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          placeholder="Descreva brevemente o que está acontecendo…"
          className={`${inputClass} resize-none`}
          disabled={pending}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center gap-3 bg-navy hover:bg-navy-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-sans font-medium text-sm px-8 py-4 rounded-sm transition-colors mt-2"
        aria-label="Enviar mensagem de contato"
      >
        {pending ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Enviando…
          </>
        ) : (
          <>
            <Send size={16} />
            Enviar mensagem
          </>
        )}
      </button>
    </form>
  );
}
