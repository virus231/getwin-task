interface BenefitProps {
    benefit: string;
}

export default function Benefit({benefit}: BenefitProps) {
    return (
        <li className="benefit">
            {/*<img src={TickSquare} alt={`benefit ${index + 1}`} />*/}
            <span>{benefit}</span>
        </li>
    );
}