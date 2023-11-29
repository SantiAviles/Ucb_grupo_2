import { Router } from "express";
import { createNewTreatment, deleteTreatmentById, getTotalTreatments, getTreatmentById, getTreatments, updateTreatmentById } from "../controllers/Treatment.controller";


const router = Router();

router.get("/Treatment",getTreatments ); // Mostrar todo
router.post("/Treatment",createNewTreatment ); // Crear Nueva Cita
router.get("/Treatment/count", getTotalTreatments ); // Contar total
router.get("/Treatment/:tratamiento_id",getTreatmentById ); // Mostrar Solo 1
router.delete("/Treatment/:tratamiento_id", deleteTreatmentById ); // Eliminar 1
router.put("/Treatment/:tratamiento_id", updateTreatmentById); // Actualizar Cita 

export default router;