import "../styles/cardTestimonial.css";

interface CardTestimonialProps {
    imageUrl: string;
    title: string;
    text: string;
    name: string;
    position: string
}

export default function CardTestimonial({ imageUrl, title, text, name, position }: CardTestimonialProps) {
    return (
        <div className="card">
            <div className="profile-image">
                <img src={imageUrl} alt={title} />
            </div>
            <p className="description">
                {text}
            </p>
            <div className="rating">
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
            </div>
            <h2 className="name">{name}</h2>
            <p className="position">{position}</p>
        </div>
    )
}