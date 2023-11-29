import { Router } from "express";
import {
  createNewMedRecord,
  deleteMedRecordById,
  getMedRecordById,
  getMedRecords,
  getTotalMedRecords,
  updateMedRecordById,
} from "../controllers/MedicalRecord.controller";

const router = Router();

router.get("/MedicalRecord", getMedRecords); // Mostrat todo
router.post("/MedicalRecord", createNewMedRecord); // Crear nuevo
router.get("/MedicalRecord/count", getTotalMedRecords); // Contar total
router.get("/MedicalRecord/:historial_id", getMedRecordById); // Mostrar 1
router.delete("/MedicalRecord/:historial_id", deleteMedRecordById); // Eliminar 1
router.put("/MedicalRecord/:historial_id", updateMedRecordById); // Actualizar 1

export default router;
