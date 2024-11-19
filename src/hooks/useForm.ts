import { useState } from "react";

/**
 * Hook personalizado para gerenciamento de formulários.
 *
 * Recebe como parametros initialValues - Valores iniciais do formulário.
 * Retorna Um objeto contendo os dados do formulário, a função de manuseio de mudanças e a função de reset.
 */

export function useForm<T>(initialValues: T) {
  const [formData, setFormData] = useState<T>(initialValues);

  // Função para lidar com as mudanças nos campos de entrada.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Função para resetar o formulário aos valores iniciais.
  const resetForm = () => {
    setFormData(initialValues);
  };

  return { formData, handleChange, resetForm };
}
