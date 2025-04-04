export type datosTelefono = {
    country:{
        name: string;
    };
};

export type datosResultado = {
    telefono: string;
    pais?: string;
    error: boolean;
};


export type datosPais = {
    name: string;
    capital: string;
};

export type datosCiudad = {
    nombre: string;
    pais: string;
    temperatura: number;
};
