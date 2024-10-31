import React, { useState } from 'react';
import "../styles/subscribeForm.css";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");
    const [motivoContato, setMotivoContato] = useState("");

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleMotivoContatoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMotivoContato(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className="subscribe-form">
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Seu melhor Email"
                required
            />
            <input
                type="text"
                value={motivoContato}
                onChange={handleMotivoContatoChange}
                placeholder="Motivo do Contato"
                required
            />
            <button type="submit">Enviar</button>
        </form>
    );
}
