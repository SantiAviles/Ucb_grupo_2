import { Router } from "express";
import {
  createNewAppointment,
  deleteAppointmentById,
  getAppointmentById,
  getAppointments,
  getTotalAppointments,
  updateAppointmentById,
} from "../controllers/Doc_appointment";

const router = Router();

router.get("/Appointments", getAppointments); // Mostrar todo
router.post("/Appointments", createNewAppointment); // Crear Nueva Cita
router.get("/Appointments/count", getTotalAppointments); // Contar total
router.get("/Appointments/:cita_id", getAppointmentById); // Mostrar Solo 1
router.delete("/Appointments/:cita_id", deleteAppointmentById); // Eliminar 1
router.put("/Appointments/:cita_id", updateAppointmentById); // Actualizar Cita

export default router;
