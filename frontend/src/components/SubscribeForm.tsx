import axios from 'axios';
import "../styles/subscribeForm.css";
import React, { useState } from 'react';

export default function SubscribeForm() {
    const [toMail, setToMail] = useState("");
    const [content, setContent] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToMail(event.target.value);
    };

    const handleMotivoContatoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/', { toMail, content });
            if (response.status == 200) {
                alert("Email enviado com sucesso!");
                setToMail("");
                setContent("");
            } else {
                alert("Erro ao enviar email.");
            }
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="subscribe-form">
            <input
                type="email"
                value={toMail}
                onChange={handleEmailChange}
                placeholder="Seu melhor Email"
                required
            />
            <input
                type="text"
                value={content}
                onChange={handleMotivoContatoChange}
                placeholder="Motivo do Contato"
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
}
