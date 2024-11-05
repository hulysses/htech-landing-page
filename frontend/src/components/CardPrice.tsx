import Button from "./Button";
import "../styles/cardPrice.css";
import Check from "../assets/icons/check.svg";

interface CardPriceProps {
    plan: string;
    text: string;
    price: string;
    benefits: string[];
    featured: boolean;
}

export default function CardPrice({ plan, price, text, benefits, featured }: CardPriceProps) {
    return (
        <div className={`cardPrice ${featured ? 'premium' : ''}`}>
            {featured && (<span className="bonus">
                <p>1º MÊS GRÁTIS</p>
            </span>
            )}

            <span className="plan">
                <h3>{plan}</h3>
                <p>{text}</p>
            </span>

            {featured ? (
                <span className="price">
                    <h2>{price}</h2>
                    <p>/mês</p>
                </span>
            ) : (
                <h2>{price}</h2>
            )}
            
            <Button text={featured ? "Experimente de graça" : "Acesse agora"} secondary key="cta" />

            <span className="hr" />
            <span className="features">
                {benefits.map((benefit) => (
                    <p>
                        <img src={Check} alt="ícone check" width={24} height={24} />
                        {benefit}
                    </p>
                ))
                }
            </span >
        </div >
    )
}