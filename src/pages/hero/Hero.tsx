import Retangle1 from "../../assets/images/Rectangle1.png"
import Retangle2 from "../../assets/images/Rectangle2.png"
import Button from "../../components/Button"
import "../../styles/hero.css"

export default function Hero() {
    return (
        <>
            <section id="hero">
                <span className="desktop-only">
                    <img src={Retangle2} alt="Retangulo um tela inicial" />
                </span>
                <img src={Retangle1} alt="Retangulo dois tela inicial" />

                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Transforme a avaliação em uma experiência inesquecível.</h1>
                    <p>
                        Seja para feedback de clientes, avaliações de produtos ou qualquer outro tipo de avaliação, a
                        HTECH oferece soluções personalizadas e inovadoras que destacam sua empresa no mercado.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}