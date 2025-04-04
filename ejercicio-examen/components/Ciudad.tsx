import { FunctionalComponent } from "preact";
import {datosCiudad} from "../types.ts"


type Props = {
    data: datosCiudad;
};

export const Ciudad: FunctionalComponent<Props> = ({data} ) => {

    return (
        <div class= "ciudad">
            <h1>Ciudad: {data.nombre}</h1>
            <p>
                Capital: <a href ={`/country/${data.pais}`}>{data.pais}</a>
            </p>
            <p>Temperatura: {data.temperatura}ªC</p>
        </div>
    );
};