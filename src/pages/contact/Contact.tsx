import "../../styles/contact.css";
import "../../styles/utility.css";
import SubscribeForm from "../../components/SubscribeForm";

export default function Contact() {
    return (
        <>
            <section id="contact" className="container">
                <header>
                    <span>
                        <h2>Receba as melhores novidades</h2>
                        <span className="desktop-only">
                            <h2>Junte-se a nós</h2>
                        </span>
                    </span>
                    <p>
                        Informe o seu melhor  e-mail para receber as melhores novidades e promoções.
                    </p>
                </header>
                <SubscribeForm />
            </section>
        </>
    )
}
