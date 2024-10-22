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
                        Problems trying to resolve the conflict between the two major
                        realms of Classical physics: Newtonian mechanics
                    </p>
                </header>
                <SubscribeForm />
            </section>
        </>
    )
}
