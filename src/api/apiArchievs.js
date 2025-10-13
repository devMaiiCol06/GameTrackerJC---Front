//Importaciones generales

import { api } from "./apiConnection.js";

// ======================================================================

// Peticiones para Archievements

// Obtener todas las Archievements
export const getArchievs = async () => {
    try {
        const response = await api.get("/getArchievs");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Guardar una Archievement
export const addArchievs = async (reqData) => {
    try {
        const response = await api.post("/addArchiev", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Eliminar una Archievement
export const deleteArchievs = async (reqData) => {
    try {
        const response = await api.delete("/deleteArchiev", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};
