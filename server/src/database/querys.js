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

//Doctors
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

//Especialidades
export const queriesS = {
  getAllSpecialties: "SELECT * FROM Especialidades",
  addNewSpecialty: "INSERT INTO Especialidades (name) VALUES (@name)",
  getSpeciatyById:
    "SELECT * FROM Especialidades WHERE especialidad_id = @especialidad_id",
  deleteSpecialty:
    "DELETE FROM Especialidades WHERE especialidad_id = @especialidad_id",
  getTotalSpecialy: "SELECT COUNT(*) FROM Especialidades",
};

//Citas Medicas
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
