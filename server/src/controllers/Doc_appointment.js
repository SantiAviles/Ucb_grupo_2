import { getConnection, sql } from "../database";
import { queriesA } from "../database/querys";

/* Citas Medicas */
export const getAppointments = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesA.getAllAppointments);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const createNewAppointment = async (req, res) => {
  const { dateTime, id_patient, id_doctor, id_specialty } = req.body;
  let { observations } = req.body;

  if (
    dateTime == null ||
    id_patient == null ||
    id_doctor == null ||
    id_specialty == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  if (observations == null) observations = "Ninguna Observacion";
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("dateTime", sql.DateTime, dateTime)
      .input("id_patient", sql.Int, id_patient)
      .input("id_doctor", sql.Int, id_doctor)
      .input("id_specialty", sql.Int, id_specialty)
      .input("observations", sql.Text, observations)
      .query(queriesA.addNewAppointment);

    res.json({ dateTime, id_patient, id_doctor, id_specialty, observations });
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const getAppointmentById = async (req, res) => {
  const { cita_id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("cita_id", cita_id)
    .query(queriesA.getAppointmentById);

  //console.log(result);
  res.send(result.recordset[0]);
};

export const deleteAppointmentById = async (req, res) => {
  const { cita_id } = req.params;

  const pool = await getConnection();
  await pool
    .request()
    .input("cita_id", cita_id)
    .query(queriesA.deleteAppointment);

  res.sendStatus(204);
};

export const getTotalAppointments = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queriesA.getTotalAppointment);

  res.json(result.recordset[0][""]);
};

export const updateAppointmentById = async (req, res) => {
  const { dateTime, id_patient, id_doctor, id_specialty, observations } = req.body;
  const { cita_id } = req.params;

  if (
    dateTime == null ||
    id_patient == null ||
    id_doctor == null ||
    id_specialty == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  const pool = await getConnection();

  await pool
    .request()
    .input("dateTime", sql.DateTime, dateTime)
    .input("id_patient", sql.Int, id_patient)
    .input("id_doctor", sql.Int, id_doctor)
    .input("id_specialty", sql.Int, id_specialty)
    .input("observations", sql.Text, observations)
    .input("cita_id", sql.Int, cita_id)
    .query(queriesA.updateAppointment);

  res.json({ dateTime, id_patient, id_doctor, id_specialty, observations });
};
