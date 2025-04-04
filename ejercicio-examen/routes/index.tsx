import {FreshContext, Handlers} from "$fresh/server.ts"
import {Resultado} from "../components/Resultado.tsx"
import {Buscador} from "../components/Buscador.tsx"
import { validarTelefono } from "../utils/api.ts"
import { datosTelefono, datosResultado } from "../types.ts"


export const handler: Handlers = {
    async GET(req:Request, ctx: FreshContext<unknown,datosResultado>){
        const url = new URL(req.url);
        const telefono = url.searchParams.get("telefono");

        if(!telefono) return ctx.render({telefono: " ", error: false});

        try {
            const datos: datosTelefono = await validarTelefono(telefono);
            return ctx.render({telefono, pais: datos.country.name, error:false});
        } catch(_e){
            return ctx.render({telefono, error: true});
        }
    },
};

export default function Home(props: {data: datosResultado}) {
    return (
        <>
            <Buscador/>
            {props.data.telefono && <Resultado data ={props.data}/>}
        </>
    )
}
