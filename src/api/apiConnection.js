//Importaciones generales

import axios from "axios";

// ======================================================================

// Crear conexion a la API/Servidor

export const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 3000,
});

// ======================================================================
