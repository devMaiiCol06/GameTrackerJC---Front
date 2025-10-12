//Importaciones generales

import { api } from "./apiConnection";

// ======================================================================

// Peticiones para Reviews

// Obtener todas las Reviews
export const getReviews = async () => {
    try {
        const response = await api.get("/showReviews");
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Guardar una Review
export const addReview = async (reqData) => {
    try {
        const response = await api.post("/addReview", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Eliminar una Review
export const deleteReview = async (reqData) => {
    try {
        const response = await api.delete("/deleteReview", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

// Actualizar una Review
export const updateReview = async (reqData) => {
    try {
        const response = await api.put("/updateReview", reqData);
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};
