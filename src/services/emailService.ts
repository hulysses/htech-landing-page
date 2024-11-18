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
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4Mzk3NjY0NzgwNTY0ODUzNTM0IiwiZW1haWwiOiJodWx5c3Nlc21hZ2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJVUll6c2EtLTNhbUNCNE9LUW40aTFnIiwibmJmIjoxNzMxOTU2MzQyLCJpYXQiOjE3MzE5NTY2NDIsImV4cCI6MTczMTk2MDI0MiwianRpIjoiYTgxY2YwODMwNDQ5ZWM5MTNjZTQwYzQ0NTNlZjliZDIzMWUzYWQxZSJ9.bYZOdocfO1BcIdvs8IDpyUPsaqzZ7BXsg3Nbt87G6WvU0SGkHe-qAQBQIjWZwEkNjSS9pJWvWRLxKRgFrODZEyD8wawIHmc1ZTgLrIA3xYPTfivBO3dI2ORVSA_F_50bV6rZfTS7M4kvAwAddl91Wmn2wY2acmXpEygVJ2Q7q0SeHyumOnBXHxjOjOFOdwtloCklgBfQHz-qrhXcr3aiOck4EufTrUi4PrCMCW2RmvIjAbb8JlWhe3BDxt4VsWor8KvQ-J0a1H7If12vR6KX40aHnBl90EzEpfR2idb4Ue-JbfzBTRsuggfcMpM_a9gqyjB5IUVFLDdpxRnn8ya4dQ`,
      },
    });
    return response.status === 200;
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    throw new Error("Erro ao enviar email.");
  }
}
