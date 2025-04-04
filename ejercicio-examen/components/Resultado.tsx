import { FunctionalComponent } from "preact";
import {datosResultado} from "../types.ts"


type Props = {
    data: datosResultado;
};

export const Resultado: FunctionalComponent<Props> = ({data} ) => {
    if(data.error){
        return <p class= "error"> Número de telefono incorrecto</p>
    }

    return (
        <div class= "resultado">
            <p><strong>TELEFONO: </strong> {data.telefono}</p>
            <p><strong>PAIS: </strong> 
                <a href={`/country/${data.pais}`}>{data.pais}</a>
            </p>
        </div>
    );
};