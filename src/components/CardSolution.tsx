import "../styles/cardSolution.css"

interface CardSolutionProps {
    imageUrl: string;
    title: string;
    text: string;
}

export default function CardSolution({ imageUrl, title, text }: CardSolutionProps) {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
            <hr/>
        </div>
    )
}