import "../../styles/pricing.css";
import "../../styles/utility.css";
import Card from "../../components/CardPrice";

export default function Pricing() {
    return (
        <>
            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">
                    <Card
                        plan="Básico"
                        text="Baixe o ferramenta e comece a utilizar agora mesmo!"
                        price="Grátis"
                        benefits={["Com anúncios", "Até 10 produtos por dia"]}
                        featured={false}
                        />
                    <Card
                        plan="Premium"
                        text="Para quem deseja utilizar nossa ferramenta sem limitações!"
                        price="R$ 19,90"
                        benefits={[
                            "1° Mês grátis",
                            "Utilize todos os produtos disponíveis na plataforma",
                        ]}
                        featured={true}
                        />
                    <Card
                        plan="Empresarial"
                        text="Utilize nossa soiução na sua empresa. Aprimore seu fluxo."
                        price="R$ 12,90"
                        benefits={["Sem anúncios", "Até 100 produtos por dia"]}
                        featured={false}
                    />
                </section>
            </section>
        </>
    )
}