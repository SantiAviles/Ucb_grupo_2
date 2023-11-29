// Pacientes
export const queries = {
  getAllPatients: "SELECT * FROM Pacientes",
  addNewPatient:
    "INSERT INTO Pacientes (name, last_name, birthdate, cel) VALUES (@name, @last_name, @birthdate, @cel)",
  getPatientById: "SELECT * FROM Pacientes WHERE paciente_id = @paciente_id",
  deletePatient: "DELETE FROM Pacientes WHERE paciente_id = @paciente_id",
  getTotalPatient: "SELECT COUNT(*) FROM Pacientes",
  updatePatient:
    "UPDATE Pacientes SET name = @name, last_name = @last_name, birthdate = @birthdate, cel = @cel WHERE paciente_id = @paciente_id",
};

// Doctors
export const queriesD = {
  getAllDoctors: "SELECT * FROM Medicos",
  addNewDoctor:
    "INSERT INTO Medicos (name, last_name, id_specialty, cel) VALUES (@name, @last_name, @id_specialty, @cel)",
  getDoctorById: "SELECT * FROM Medicos WHERE medico_id = @medico_id",
  deleteDoctor: "DELETE FROM Medicos WHERE medico_id = @medico_id",
  getTotalDoctor: "SELECT COUNT(*) FROM Medicos",
  updateDoctor:
    "UPDATE Medicos SET name = @name, last_name = @last_name, id_specialty = @id_specialty, cel = @cel WHERE medico_id = @medico_id",
};

// Especialidades
export const queriesS = {
  getAllSpecialties: "SELECT * FROM Especialidades",
  addNewSpecialty: "INSERT INTO Especialidades (name) VALUES (@name)",
  getSpeciatyById:
    "SELECT * FROM Especialidades WHERE especialidad_id = @especialidad_id",
  deleteSpecialty:
    "DELETE FROM Especialidades WHERE especialidad_id = @especialidad_id",
  getTotalSpecialy: "SELECT COUNT(*) FROM Especialidades",
};

// Citas Medicas
export const queriesA = {
  getAllAppointments: "SELECT * FROM CitasMedicas",
  addNewAppointment:
    "INSERT INTO CitasMedicas (dateTime, id_patient, id_doctor, id_specialty, observations) VALUES (@dateTime, @id_patient, @id_doctor, @id_specialty, @observations)",
  getAppointmentById: "SELECT * FROM CitasMedicas WHERE cita_id = @cita_id",
  deleteAppointment: "DELETE FROM CitasMedicas WHERE cita_id = @cita_id",
  getTotalAppointment: "SELECT COUNT(*) FROM CitasMedicas",
  updateAppointment:
    "UPDATE CitasMedicas SET dateTime = @dateTime, id_patient = @id_patient, id_doctor = @id_doctor, id_specialty = @id_specialty, observations = @observations WHERE cita_id = @cita_id",
};

// Tratamientos
export const queriesT = {
  getAllTreatment: "SELECT * FROM Tratamientos",
  addNewTreatment:
    "INSERT INTO Tratamientos (name, description, cost) VALUES (@name, @description, @cost)",
  getTreatmentById:
    "SELECT * FROM Tratamientos WHERE tratamiento_id = @tratamiento_id",
  deleteTreatment:
    "DELETE FROM Tratamientos WHERE tratamiento_id = @tratamiento_id",
  getTotalTreatment: "SELECT COUNT(*) FROM Tratamientos",
  updateTreatment:
    "UPDATE Tratamientos SET name = @name, description = @description, cost = @cost WHERE tratamiento_id = @tratamiento_id",
};

// Historial Medico
export const queriesHM = {
  getAllMedRecord: "SELECT * FROM HistorialMedico",
  addNewMedRecord:
    "INSERT INTO HistorialMedico (id_patient, cons_date, diagnosis) VALUES (@id_patient, @cons_date, @diagnosis)",
  getMedRecordById:
    "SELECT * FROM HistorialMedico WHERE historial_id = @historial_id",
  deleteMedRecord:
    "DELETE FROM HistorialMedico WHERE historial_id = @historial_id",
  getTotalMedRecord: "SELECT COUNT(*) FROM HistorialMedico",
  updateMedRecord:
    "UPDATE HistorialMedico SET id_patient = @id_patient, cons_date = @cons_date, diagnosis = @diagnosis WHERE historial_id = @historial_id",
};

// Horarios
export const queriesH = {
  getAllSchedule: "SELECT * FROM Horario",
  addNewSchedule: "INSERT INTO Horario (id_doctor, day_week, hour_start, hour_end) VALUES (@id_doctor, @day_week, @hour_start, @hour_end)",
  getScheduleById: "SELECT * FROM Horario WHERE horario_id = @horario_id",
  deleteSchedule: "DELETE FROM Horario WHERE horario_id = @horario_id",
  getTotalSchedule: "SELECT COUNT(*) FROM Horario",
  updateSchedule: "UPDATE Horario SET id_doctor = @id_doctor, day_week = @day_week, hour_start = @hour_start, hour_end = @hour_end",
};
