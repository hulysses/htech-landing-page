import "../styles/cardTestimonial.css";
import Star from "../assets/icons/star.svg";
import StarOuter from "../assets/icons/starOuter.svg";

interface CardTestimonialProps {
  imageUrl: string;
  text: string;
  name: string;
  position: string;
}

export default function CardTestimonial({
  imageUrl,
  text,
  name,
  position,
}: CardTestimonialProps) {
  return (
    <div className="carousel-content">
      <div className="carousel-card">
        <img src={imageUrl} alt="Imagem perfil cliente" />
        <span className="testimony">
          <p>{text}</p>
        </span>
        <span className="rating">
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img src={Star} alt="ícone estrela" width={22} height={20} />
          <img
            src={StarOuter}
            alt="ícone estrela sem fundo"
            width={20}
            height={22}
          />
        </span>
        <span className="names">
          <p>{name}</p>
          <p>{position}</p>
        </span>
      </div>
    </div>
  );
}
