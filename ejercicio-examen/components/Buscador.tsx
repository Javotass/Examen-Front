import { FunctionalComponent } from "preact";

export const Buscador: FunctionalComponent = ()=> {
    return (
        <div class= "buscador">
            <form method = "get">
                <input type= "text" name= "telefono" placeholder="Introduce tu telefono"/>
                <button class = "botonBusqueda" type= "submit">Enviar</button>
            </form>
        </div>
    );
};