import "../styles/cardPricePreemium.css";
import Check from "../assets/icons/check.svg";
import Button from "./Button";

interface CardPriceProps {
    plan: string;
    text: string;
    price: string;
    benefits: string[];
    offer: string;
}

export default function CardPrice({ plan, price, text, benefits, offer }: CardPriceProps) {
    return (
        <div className="cardPriceP">
            <div className="offer-tag">{offer}</div>
            <h3>{plan}</h3>
            <p>{text}</p>
            <h2>{price}</h2>
            <Button text="Experimente de graça" secondary />
            <hr />
            {benefits.map((benefit, index) => (
                <p key={index}>
                    <img className="img" src={Check} alt="Icone de check" />
                    {benefit}
                </p>
            ))}
        </div>
    );
}
