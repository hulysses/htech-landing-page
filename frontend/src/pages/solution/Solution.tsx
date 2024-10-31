import Card from "../../components/CardSolution"
import "../../styles/solution.css"
import "../../styles/utility.css"

export default function Solution() {
    return (
        <>
            <section id="solution" className="container">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>HTecH </strong>já conquistou diversos clientes, seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <section className="even-columns">
                    <Card 
                        imageUrl="https://cdn3d.iconscout.com/3d/premium/thumb/digital-marketing-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--online-business-promotion-mobile-and-strategy-megaphone-pack-illustrations-4596633.png"
                        title="Avaliações que Fazem a Diferença"
                        text="Seja para produtos ou serviços, nossas soluções inovadoras destacam sua marca ao oferecer avaliações claras, interativas e impactantes. Eleve a percepção de valor e conquiste seu público de forma única."
                    />
                    <Card 
                        imageUrl="https://static.vecteezy.com/system/resources/previews/009/343/594/original/3d-feedback-chat-illustration-png.png"
                        title="Feedback Personalizado"
                        text="Transforme a maneira como sua empresa coleta feedback. Com nossas soluções personalizadas, cada avaliação se torna uma oportunidade de crescimento, garantindo experiências inesquecíveis para seus clientes."
                    />
                    <Card 
                        imageUrl="https://cdn3d.iconscout.com/3d/premium/thumb/financial-contract-3d-icon-download-in-png-blend-fbx-gltf-file-formats--agreement-deal-pack-business-icons-8432858.png?f=webp"
                        title="Experiência de Avaliação Elevada"
                        text="Com nossa tecnologia, simples avaliações se tornam momentos memoráveis. Entregamos soluções que aumentam a visibilidade da sua empresa, garantindo oportunidades de crescimento."
                    />
                </section>
            </section>
        </>
    )
}