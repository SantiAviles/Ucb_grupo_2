import { Router } from "express";
import { createNewSpecialty, deleteEspecialtyById, getSpecialties, getSpecialtyById, getTotalSpecialties } from "../controllers/Specialty.controller";

const router = Router();

router.get("/Specialty", getSpecialties); // Mostrar Todo
router.post("/Specialty", createNewSpecialty); // Crear Nueva Especialidad
router.get("/Specialty/count", getTotalSpecialties); // Contar Total
router.get("/Specialty/:especialidad_id", getSpecialtyById); // Mostrar Solo 1
router.delete("/Specialty/:especialidad_id", deleteEspecialtyById); // Eliminar
//router.put("/Specialty/:especialidad_id"); // Actualizar necesario??


export default router;
