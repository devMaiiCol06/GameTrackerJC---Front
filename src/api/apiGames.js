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
export const addGame = async () => {
    try {
        const response = await api.post("/addGame");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Eliminar un Juego
export const deleteGame = async () => {
    try {
        const response = await api.delete("/deleteGame");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Actualizar un Juego
export const updateGame = async () => {
    try {
        const response = await api.put("/updateGame");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};


