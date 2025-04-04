import { FunctionalComponent } from "preact";
import {datosPais} from "../types.ts"


type Props = {
    data: datosPais;
};

export const Pais: FunctionalComponent<Props> = ({data} ) => {

    return (
        <div class= "pais">
            <h1>Pais: {data.name}</h1>
            <p>
                Capital: <a href ={`/city/${data.capital}`}>{data.capital}</a>
            </p>
        </div>
    );
};