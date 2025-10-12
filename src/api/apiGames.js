//Importaciones generales

import { api } from "./apiConnection"

// ======================================================================

// Peticiones para Juegos

// Obtener todos los Juegos
export const getGames = async () => {
    try {
        const response = await api.get("/showGames");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Guardar un Juego
export const addGame = async (reqData) => {
    try {
        const response = await api.post("/addGame", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Eliminar un Juego
export const deleteGame = async (reqData) => {
    try {
        const response = await api.delete("/deleteGame", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Actualizar un Juego
export const updateGame = async (reqData) => {
    try {
        const response = await api.put("/updateGame", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};


