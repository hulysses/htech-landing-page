import axios from "axios";
import { FormData } from "../components/SubscribeForm";

/**
 * Função para enviar o email utilizando Axios.
 *
 * Recebe como parametro formData - Dados do formulário contendo o email e o conteúdo.
 * Retorna uma Promise que resolve para verdadeiro se o envio for bem-sucedido.
 */
export async function sendEmail(formData: FormData): Promise<boolean> {
  try {
    const response = await axios.post("/function-1", formData, {
      headers: {
        Authorization: `Bearer `,
      },
    });
    return response.status === 200;
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    throw new Error("Erro ao enviar email.");
  }
}
