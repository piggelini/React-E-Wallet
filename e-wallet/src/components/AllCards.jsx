import { deleteCard, UpdateUserName } from "../redux/cardlistSlice";
import Card from "./Card";
import { useSelector } from "react-redux";



export default function AllCards() {

    const { cards } = useSelector((state) => state.cardList);
    return (
        <>
            <section className="active-card">
                <p>Active card</p>
                {cards.map((card) => {
                    if (card.active == true) {
                        return <Card key={card.id} card={card} number={card.number} cardholder={card.name} valid={card.valid} vendor={card.vendor} id={card.id} />
                    }
                })
                }
            </section>
            <section className="deactivated-cards">
                <p>Deactivated cards</p>
                {cards.map((card) => {
                    if (card.active == false) {
                        return <Card key={card.id} card={card} number={card.number} cardholder={card.name} valid={card.valid} vendor={card.vendor} id={card.id} />
                    }
                })
                }
            </section>
        </>


    )
}
