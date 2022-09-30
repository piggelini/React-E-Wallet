import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="link" to="/cards">Cards</Link>
                </li>
                <li>
                    <Link className="link" to="/addcard">Add new card</Link>
                </li>
            </ul>
        </nav>
    )
}