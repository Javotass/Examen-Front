import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import {Pais} from "../../components/Pais.tsx"
import {datosPais} from "../../types.ts"
import {apiPais} from "../../utils/api.ts"


export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext<unknown,datosPais>){
        const {pais}= ctx.params;
        const datos = await apiPais(pais);
        return ctx.render(datos);
    },
};

export default function Page(props: PageProps<datosPais>) {
    return<Pais data={props.data} />;
}

