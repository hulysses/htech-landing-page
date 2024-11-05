import "../../styles/utility.css";
import "../../styles/testimonial.css";
import Card from "../../components/CardTestimonial";
import Profile1 from "../../assets/images/profile/profile1.png";
import Profile2 from "../../assets/images/profile/profile2.png";
import Profile3 from "../../assets/images/profile/profile3.png";
import Profile4 from "../../assets/images/profile/profile4.png";

export default function Testimonial() {
    return (
        <>
            <section id="testimonials">
                <header className="header">
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Confira o que os clientes da HTecH dizem sobre nossas soluções:
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <Card
                            imageUrl={Profile1}
                            text="Com as soluções da HTecH, conseguimos transformar feedback em ação, elevando nossa eficiência e satisfação dos clientes."
                            name="Nithi Nambika"
                            position="CEO Nestlé"
                        />
                        <Card
                            imageUrl={Profile2}
                            text="A inovação da HTecH fez toda a diferença para nós. As ferramentas personalizadas trouxeram resultados surpreendentes."
                            name="Frank Flores"
                            position="CEO Americanas"
                        />
                        <Card
                            imageUrl={Profile3}
                            text="Desde que implementamos as soluções da HTecH, nossas avaliações passaram a ser uma parte essencial da experiência do cliente."
                            name="Fernanda Lima"
                            position="CEO Casas Bahia"
                        />
                        <Card
                            imageUrl={Profile4}
                            text="Desde que começamos a utilizar as soluções da HTech, nossa empresa viu um aumento significativo na satisfação dos clientes."
                            name="Mayara Silva"
                            position="CEO X"
                        />
                    </div>
                    <div className="carousel-content">
                        <Card
                            imageUrl={Profile1}
                            text="Com as soluções da HTecH, conseguimos transformar feedback em ação, elevando nossa eficiência e satisfação dos clientes."
                            name="Nithi Nambika"
                            position="CEO Nestlé"
                        />
                        <Card
                            imageUrl={Profile2}
                            text="A inovação da HTecH fez toda a diferença para nós. As ferramentas personalizadas trouxeram resultados surpreendentes."
                            name="Frank Flores"
                            position="CEO Americanas"
                        />
                        <Card
                            imageUrl={Profile3}
                            text="Desde que implementamos as soluções da HTecH, nossas avaliações passaram a ser uma parte essencial da experiência do cliente."
                            name="Fernanda Lima"
                            position="CEO Casas Bahia"
                        />
                        <Card
                            imageUrl={Profile4}
                            text="Desde que começamos a utilizar as soluções da HTech, nossa empresa viu um aumento significativo na satisfação dos clientes."
                            name="Mayara Silva"
                            position="CEO X"
                        />
                    </div>
                </section>
            </section>
        </>
    )
}