import React from "react";
import Button from "./Button";
import "../styles/subscribeForm.css";
import { useForm } from "../hooks/useForm";
import { sendEmail } from "../services/emailService";

/**
 *
 * Este componente renderiza um formulário de contato que permite aos usuários
 * enviar seu email e o motivo do contato. Utiliza o hook useForm para gerenciar
 * o estado do formulário e o serviço emailService para realizar a requisição de envio de email.
 *
 */
export interface FormData {
  toMail: string;
  content: string;
}

export default function SubscribeForm() {
  // Utiliza o hook personalizado para gerenciamento do formulário
  const { formData, handleChange, resetForm } = useForm<FormData>({
    toMail: "",
    content: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Chama a função sendEmail do serviço dedicado
      const success = await sendEmail(formData);
      if (success) {
        alert("Email enviado com sucesso!");
        resetForm();
      }
    } catch {
      alert("Erro ao enviar email");
    }
  };

  return (
    <form
      // onSubmit={handleSubmit}
      className="subscribe-form"
      aria-label="Formulário de Inscrição"
    >
      <input
        type="email"
        id="toMail"
        name="toMail"
        value={formData.toMail}
        onChange={handleChange}
        placeholder="Seu melhor Email"
        required
      />
      <input
        type="text"
        id="content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        placeholder="Motivo do Contato"
        required
      />
      <Button text="Enviar" />
    </form>
  );
}
