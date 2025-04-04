import Axios from "npm:axios"
import { datosTelefono, datosCiudad, datosPais } from "../types.ts"

export const validarTelefono = async (num: string): Promise<datosTelefono> => {
    const apikey = Deno.env.get("API_KEY");
    const res = await  Axios.get(`https://api.api-ninjas.com/v1/validatephone?number=${num}`, {
        headers: {"X-API-KEY": apikey},
    });
    if(!res.data || !res.data.is_valid) throw new Error("Telefono Invalido");
    return {country: {name: res.data.country}};
};

export const apiPais = async (pais: string): Promise<datosPais> => {
    const apikey = Deno.env.get("API_KEY");
    const res = await  Axios.get(`https://api.api-ninjas.com/v1/country?name=${pais}`, {
        headers: {"X-API-KEY": apikey},
    });
    return {name: res.data[0].name, capital: res.data[0].capital};
};

export const apiCiudad = async (ciudad: string): Promise<datosCiudad> => {
    const apikey = Deno.env.get("API_KEY");
    const ciudadRes = await  Axios.get(`https://api.api-ninjas.com/v1/country?name=${ciudad}`, {
        headers: {"X-API-KEY": apikey},
    });
    if(!ciudadRes.data || ciudadRes.data.length === 0){
        throw new Error("Telefono Invalido");
    }
    const { name, country, latitude, longitude} = ciudadRes.data[0];

    const climaRes = await Axios.get(`https://api.api-ninjas.com/v1/weather?lat=${latitude}&lon=${longitude}`,{
        headers: {"X-API-KEY": apikey},
    });

    return {
        nombre: name,
        pais: country,
        temperatura: climaRes.data.temp,
    };
};