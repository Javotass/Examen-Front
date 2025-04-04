import { FunctionalComponent } from "preact";

export const Header: FunctionalComponent = () => {
    return (
        <header class = "header">
            <a href="/">
                <button class = "botonHome">Inicio</button>
            </a>
        </header>
    );
};