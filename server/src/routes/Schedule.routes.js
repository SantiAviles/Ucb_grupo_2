import { Router } from "express";
import { createNewSchedule, deleteScheduleById, getSchedule, getScheduleById, getTotalSchedule, updateScheduleById } from "../controllers/Schedule.controller";

const router = Router();

router.get("/Schedule", getSchedule); // Mostrar todo
router.post("/Schedule", createNewSchedule ); // Crear Nueva Cita
router.get("/Schedule/count", getTotalSchedule); // Contar total
router.get("/Schedule/:horario_id", getScheduleById); // Mostrar Solo 1
router.delete("/Schedule/:horario_id", deleteScheduleById); // Eliminar 1
router.put("/Schedule/:horario_id", updateScheduleById); // Actualizar Cita 


export default router;