import axios from 'axios';
import Button from './Button';
import "../styles/subscribeForm.css";
import React, { useState } from 'react';

export default function SubscribeForm() {
    const [formData, setFormData] = useState({
        toMail: "",
        content: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const sendEmail = async () => {
        try {
            const response = await axios.post('/function-1', formData, {
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA4Mzk3NjY0NzgwNTY0ODUzNTM0IiwiZW1haWwiOiJodWx5c3Nlc21hZ2FAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJFVVNaTi1uTkhIVVlMVENjTHJ0NzVnIiwibmJmIjoxNzMxMzMyNjcxLCJpYXQiOjE3MzEzMzI5NzEsImV4cCI6MTczMTMzNjU3MSwianRpIjoiMTAzZjM3YWQxN2U4ZDQ1ZjhiYjcwM2JmMTk1NGQ5YzFhNDQzMWE1YiJ9.Lvus6NdEPh1XuAY47D_BXSzI-qOkcY9lcQz5Q5jc5ejBjbaXpQuWfzhsvw8v5zkgHq441L9AbxEXQBJZpES7i6WwCTBTRUzuGE4oMmea6ZJDz4kUm5dadApvvgjOEaJXm9WmJLW2uhi9R1jcXWb7dXlNTEq4pxWCkDFPGXjL2I6GyAOXjtkVH-Nu0tB_1hGAE2JkIOXpjkGa-AQVxJDKItF_SsqU2jYR3mU6FFuCslYBNCd51pwTBV6HS4ouKDIhreddWo0kSFc6P2yMG9XWlMw1PSwFdnqWnLHYQMsUkS2WGd87sq3RI6s2tvFfpyvRCoURjiOGz_Q4bFJnppcMXg`
                }
            });
            return response.status === 200;
        } catch (err) {
            console.error("Erro ao enviar email:", err);
            throw new Error("Erro ao enviar email.");
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const success = await sendEmail();
            if (success) {
                alert("Email enviado com sucesso!");
                setFormData({ toMail: "", content: "" });
            }
        } catch {
            alert("Erro ao enviar emaisl");
        };
    }
    return (
        <form onSubmit={handleSubmit} className="subscribe-form" aria-label="Formulário de Inscrição">
            <input
                type="email"
                name="toMail"
                value={formData.toMail}
                onChange={handleChange}
                placeholder="Seu melhor Email"
                required
            />
            <input
                type="text"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Motivo do Contato"
                required
            />
            <Button text='Enviar' />
        </form>
    );
}
