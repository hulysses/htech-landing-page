import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração principal do Vite
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configuração de proxy para o servidor de desenvolvimento
      "/function-1": {
        target: "https://us-central1-arch-lambda-htech.cloudfunctions.net", // URL de destino do proxy
        changeOrigin: true, // Altera a origem da requisição
        rewrite: (path) => path.replace(/^\/function-1/, "/function-1"), // Reescreve o caminho da URL adicionando o prefixo /function-1
      },
    },
  },
});
