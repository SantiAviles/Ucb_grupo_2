import { Router } from "express";
import {
  createNewDoctor,
  deleteDoctorById,
  getDoctorById,
  getDoctors,
  getTotalDoctors,
  updateDoctorById,
} from "../controllers/Doctor.controller";

const router = Router();

router.get("/Doctor", getDoctors); // Mostrar Todo
router.post("/Doctor", createNewDoctor); // Crear Nuevo Doctor
router.get("/Doctor/count", getTotalDoctors); // Contar Total
router.get("/Doctor/:medico_id", getDoctorById); // Mostrar Solo 1
router.delete("/Doctor/:medico_id", deleteDoctorById); // Eliminar
router.put("/Doctor/:medico_id", updateDoctorById); // Actualizar

export default router;
