import React, { useState } from 'react';
import "../styles/subscribeForm.css";

export default function SubscribeForm() {
    const [email, setEmail] = useState("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para enviar o email
        console.log("Email inscrito:", email);
    };

    return (
        <form onSubmit={handleSubmit} className="subscribe-form">
            <input
                type="email"
                value={email}
                onChange={handleInputChange}
                placeholder="Seu melhor Email"
                required
            />
            <button type="submit">Inscrever-se</button>
        </form>
    );
}
