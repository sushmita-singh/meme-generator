import trollFace from "../images/logo.png";

export default function Header() {
    return (
        <header className="header">
            <img 
                className="header--image"
                alt="Troll Face Logo"
                src={trollFace} 
            />
            <h1 class name="header--title">
                Meme Generator
            </h1>
        </header>
    )
}