import Card from "../../components/CardTestimonial"
import "../../styles/testimonial.css"
import "../../styles/utility.css"

export default function Testimonial() {
    return (
        <>
            <section id="testimonial" className="container containerWidth">
                <header>
                    <span>
                        <h2>Conselho de quem conhece</h2>
                        <span className="desktop-only">
                            <h2>Cada cliente importa!</h2>
                        </span>
                    </span>
                    <p>
                        Confira o que os clientes da HTecH dizem sobre nossas soluções:
                    </p>
                </header>
                <section className="even-columns container">
                    <Card 
                        imageUrl="https://images.unsplash.com/photo-1542190891-2093d38760f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Foto de perfil do cliente"
                        text="Com as soluções da HTecH, conseguimos transformar feedback em ação, elevando nossa eficiência e satisfação dos clientes. É uma verdadeira parceria de sucesso!"
                        name="Nithi Nambika"
                        position="CEO Nestlé"
                    />
                    <Card 
                        imageUrl="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Foto de perfil do cliente"
                        text="A inovação da HTecH fez toda a diferença para nós. As ferramentas personalizadas trouxeram resultados surpreendentes e melhoraram nossa relação com os clientes."
                        name="Frank Flores"
                        position="CEO Americanas"
                    />
                    <Card 
                        imageUrl="https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Foto de perfil do cliente"
                        text="Desde que implementamos as soluções da HTecH, nossas avaliações passaram a ser uma parte essencial da experiência do cliente, permitindo ajustes precisos e melhorias contínuas."
                        name="Fernanda Lima"
                        position="CEO Casas Bahia"
                    />
                    <Card 
                        imageUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        title="Foto de perfil do cliente"
                        text="Desde que começamos a utilizar as soluções da HTech, nossa empresa viu um aumento significativo na satisfação dos clientes. A experiência de avaliação nunca foi tão positiva!"
                        name="Mayara Silva"
                        position="CEO X"
                    />
                </section>
            </section>
        </>
    )
}