import { Link } from "react-router-dom";
import Header from "../components/Header";
import AllCards from "../components/AllCards";

export default function Cards() {

    return (
        <>
            <Header text="E-WALLET" />
            <main>
                <AllCards />
                <Link to="/addcard"><button>ADD A NEW CARD</button></Link>
            </main>
        </>
    )
}