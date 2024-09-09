import "../styles/card.css"

interface ButtonProps {
    imageUrl: string;
    title: string;
    text: string;
}

export default function Card({ imageUrl, title, text }: ButtonProps) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} width="64" height="64"/>
            <h3>{title}</h3>
            <p>{text}</p>
            <hr/>
        </div>
    )
}