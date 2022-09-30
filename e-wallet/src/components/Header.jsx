import Navigation from "./Navigation"

export default function Header({ text }) {
    return (
        <header>
            <h1>{text}</h1>
            <Navigation />
        </header>
    )
}