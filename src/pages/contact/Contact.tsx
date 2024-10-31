import "../../styles/contact.css";
import "../../styles/utility.css";
import SubscribeForm from "../../components/SubscribeForm";

export default function Contact() {
    return (
        <>
            <section id="contact" className="container">
                <header>
                    <span>
                        <h2>Envie sua dúvida</h2>
                        <span className="desktop-only">
                            <h2>Entre em contao</h2>
                        </span>
                    </span>
                    <p>
                    Entre em contato, estamos dispostos a tirar qualquer dúvida,seja um orçamento, uma dúvida técnica de algum de nossos produtos.Estamos à disposição para responder.😎
                    </p>
                </header>
                <SubscribeForm />
            </section>
        </>
    )
}
