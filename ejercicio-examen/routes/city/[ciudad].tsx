import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import {Ciudad} from "../../components/Ciudad.tsx"
import {datosCiudad} from "../../types.ts"
import {apiCiudad} from "../../utils/api.ts"


export const handler: Handlers = {
    async GET(_req: Request, ctx: FreshContext<unknown,datosCiudad>){
        const {ciudad}= ctx.params;
        const datos = await apiCiudad(ciudad);
        return ctx.render(datos);
    },
};

export default function Page(props: PageProps<datosCiudad>) {
    return<Ciudad data={props.data} />;
}
