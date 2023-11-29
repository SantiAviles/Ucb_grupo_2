import { Router } from "express"; // router permite crear URLs

import {
  createNewPacient,
  deletePatientById,
  getPacientes,
  getPatientId,
  getTotalPatients,
  updatePatienById,
} from "../controllers/Patient.controller";

const router = Router(); // instanciamos router ccon Router()

router.get("/Patient", getPacientes); // Mostrar todo
router.post("/Patient", createNewPacient); // Crear
router.get("/Patient/count", getTotalPatients); // Contar
router.get("/Patient/:paciente_id", getPatientId); // Mostrar solo 1
router.delete("/Patient/:paciente_id", deletePatientById); // Eliminar
router.put("/Patient/:paciente_id", updatePatienById); // Actualizar

export default router;
