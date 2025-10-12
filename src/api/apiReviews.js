//Importaciones generales

import { api } from "./apiConnection";

// ======================================================================

// Peticiones para Reviews

// Obtener todas las Reviews
export const getReviews = async () => {
    try {
        const response = await api.get("/showGames");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Guardar una Review
export const addReview = async () => {
    try {
        const response = await api.post("/addGame");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Eliminar una Review
export const deleteReview = async () => {
    try {
        const response = await api.delete("/deleteGame");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Actualizar una Review
export const updateReview = async () => {
    try {
        const response = await api.put("/updateReview");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};
