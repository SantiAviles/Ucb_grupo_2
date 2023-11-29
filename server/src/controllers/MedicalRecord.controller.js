import { getConnection, sql } from "../database";
import { queriesHM } from "../database/querys";

/* Historial Medico */

 export const getMedRecords = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesHM.getAllMedRecord);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const createNewMedRecord = async (req, res) => {
  const { id_patient, cons_date, diagnosis} = req.body;
  

  if (
    id_patient == null ||
    cons_date == null ||
    diagnosis == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("id_patient", sql.Int, id_patient)
      .input("cons_date", sql.Date, cons_date)
      .input("diagnosis", sql.VarChar, diagnosis)
      .query(queriesHM.addNewMedRecord);

    res.json({ id_patient, cons_date, diagnosis});
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const getMedRecordById = async (req, res) => {
  const { historial_id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("historial_id", historial_id)
    .query(queriesHM.getMedRecordById);

  //console.log(result);
  res.send(result.recordset[0]);
};

export const deleteMedRecordById = async (req, res) => {
  const { historial_id } = req.params;

  const pool = await getConnection();
  await pool
    .request()
    .input("historial_id", historial_id)
    .query(queriesHM.deleteMedRecord);

  res.sendStatus(204);
};

export const getTotalMedRecords = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queriesHM.getTotalMedRecord);

  res.json(result.recordset[0][""]);
};

export const updateMedRecordById = async (req, res) => {
    const { id_patient, cons_date, diagnosis } = req.body;
    const { historial_id } = req.params;
  
    if (
      id_patient == null ||
      cons_date == null ||
      diagnosis == null
    ) {
      return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
    }
  
    const pool = await getConnection();
  
    await pool
      .request()
      .input("id_patient", sql.Int, id_patient)
      .input("cons_date", sql.Date, cons_date)
      .input("diagnosis", sql.VarChar, diagnosis)
      .input("historial_id", sql.Int, historial_id)
      .query(queriesHM.updateMedRecord);
  
    res.json({ id_patient, cons_date, diagnosis });
  }; 