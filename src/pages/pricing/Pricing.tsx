import Card from "../../components/CardPrice"
import "../../styles/pricing.css"
import "../../styles/utility.css"

export default function Pricing() {
    return (
        <>
            <section id="pricing" className="container">
                <header>
                    <span>
                        <h2>Planos e preços</h2>
                        <span className="desktop-only">
                            <h2>Nossos planos</h2>
                        </span>
                    </span>
                </header>
                <section className="even-columns">
                    <Card 
                        plan="Básico"
                        text="Baixe o ferramenta e comece a utilizar agora mesmo!"
                        price="Grátis"
                        benefits={["Com anúncios", "Até 10 produtos por dia", "Utilize sem limitação X"]}
                    />
                    <Card 
                        plan="Premium"
                        text="Baixe o ferramenta e comece a utilizar agora mesmo!"
                        price="R$ 19,90"
                        benefits={["Sem interrupção de anúncios", "Utilize quantas vezes quiser", "Utilize todos os produtos disponíveis na plataforma"]}
                    />
                    <Card 
                        plan="Empresarial"
                        text="Utilize nossa soiução na sua empresa. Aprimore seu fluxo."
                        price="R$ 12,90"
                        benefits={["Com anúncios", "Até 10 produtos por dia", "Utilize sem limitação X"]}
                    />
                </section>
            </section>
        </>
    )
}