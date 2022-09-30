import { activateCard, deleteCard } from "../redux/cardlistSlice";
import { useDispatch } from "react-redux";
import { FcSimCardChip } from "react-icons/fc"

export default function Card({ card, number, cardholder, valid, vendor, id }) {

    const dispatch = useDispatch();

    const handleActivateCard = () => {
        if (card.active == false) {
            dispatch(activateCard(id));
        }

    }
    const handleDeleteCard = () => {
        dispatch(deleteCard(id));
    }

    let numberString = number.toString()
    let part1 = numberString.slice(0, 4)
    let part2 = numberString.slice(4, 8)
    let part3 = numberString.slice(8, 12)
    let part4 = numberString.slice(12, 16)
    number = part1 + " " + part2 + " " + part3 + " " + part4;


    return (
        <>
            <article onClick={() => handleActivateCard()}>

                <p>VENDOR ICON</p>
                <div className="card-middle">
                    <FcSimCardChip size={50} />
                    <p className="card-number">{number}</p>
                </div>


                <div className="card-bottom">
                    <div className="card-bottom-name">
                        <p>Cardholder name</p>
                        <p>{cardholder}</p>
                    </div>
                    <div className="card-bottom-valid">
                        <p>VALID THRU</p>
                        <p>{valid}</p>
                    </div>
                </div>
            </article>
            {!card.active && <button onClick={() => handleDeleteCard()}>Delete card</button>}
        </>
    )
}