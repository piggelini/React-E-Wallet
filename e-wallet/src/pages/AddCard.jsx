import Header from "../components/Header";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/cardlistSlice";

export default function AddCard() {
    const dispatch = useDispatch();
    const { latestId } = useSelector((state) => state.cardList);
    const { cards } = useSelector((state) => state.cardList);
    const [validNumber, setValidNumber] = useState(true);



    const handleChange = (e, id) => {
        const inputValue = e.target.value;
        document.getElementById(`card-${id}`).textContent = inputValue;

    }




    const handleAddCard = (e) => {
        e.preventDefault();

        let number = document.querySelector("#card_number").value;
        let name = document.querySelector("#name").value;
        let month = document.querySelector("#month").value;
        let year = document.querySelector("#year").value;
        let vendor = document.querySelector("#vendor").value;
        let ccv = document.querySelector("#ccv").value;
        const num = Number(number)
        if (number.length === 16 && Number.isInteger(num)) {
            dispatch(
                addCard({
                    number: number,
                    name: name,
                    valid: month + "/" + year,
                    vendor: vendor,
                    ccv: ccv,
                    active: false,
                    id: latestId + 1
                })
            );
            setValidNumber(true);
        } else {
            setValidNumber(false);
        }

    };
    return (
        <>
            <Header text="Add a new card" />
            <main>
                <article>
                    <div>
                        <p id="card-number"></p>
                        <p id="card-vendor"></p>
                    </div>

                    <div>
                        <div>
                            <p>Cardholder name</p>
                            <p>{cards[0].name}</p>
                        </div>
                        <div>
                            <p>VALID THRU</p>
                            <p id="card-month"></p>/<p id="card-year"></p>
                        </div>
                    </div>
                </article>
                <form>
                    <label htmlFor="number">Cardnumber</label>
                    <input type="text" name="number" id="card_number" maxLength={16} minLength={16} onChange={(e) => handleChange(e, "number")} />
                    {!validNumber && <p className="error">Error: please enter a valid cardnumber.</p>}
                    <label htmlFor="name">Cardholder name</label>
                    <input type="text" name="name" id="name" readOnly value={cards[0].name} />
                    <div class="expire-input-wrapper">
                        <label htmlFor="valid">Expire month</label>
                        <input className="expire-input" type="text" name="month" id="month" onChange={(e) => handleChange(e, "month")} />
                        <label htmlFor="valid">Expire year</label>
                        <input className="expire-input" type="text" name="year" id="year" onChange={(e) => handleChange(e, "year")} />
                    </div>
                    <label htmlFor="CCV">CCV</label>
                    <input type="text" name="ccv" id="ccv" />
                    <label htmlFor="vendor">Vendor</label>
                    <select id="vendor" name="vendor" onChange={(e) => handleChange(e, "vendor")}>
                        <option value="Ramen">Ramen</option>
                        <option value="Mochi">Mochi</option>
                        <option value="Miso">Miso</option>
                        <option value="Yuzu">Yuzu</option>
                    </select>
                    <button onClick={(e) => handleAddCard(e)}>ADD CARD</button>
                </form>
            </main>
        </>
    )
}