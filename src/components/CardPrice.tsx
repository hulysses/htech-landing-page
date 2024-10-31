import "../styles/cardPrice.css";
import Check from "../assets/icons/check.svg"
import Button from "./Button";

interface CardPriceProps {
    plan: string;
    text: string;
    price: string;
    benefits: string[];
}

export default function CardPrice({ plan, price,  text, benefits }: CardPriceProps) {
    return (
        <div className="cardPrice">
            <h3>{plan}</h3>
            <p>{text}</p>
            <h2>{price}</h2>
            <Button text="Baixar agora" secondary />
            <hr/>
            {benefits.map((benefit, index) => (
                <p key={index}>
                    <img className="img" src={Check} alt="Icone de check" />
                    {benefit}
                </p>
            ))}
        </div>
    )
}