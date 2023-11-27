import { getConnection, sql } from "../database";
import { queriesS } from "../database/querys";

/* Especialidades */
export const getSpecialties = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesS.getAllSpecialties);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const createNewSpecialty = async (req, res) => {
  const { name } = req.body;

  if (name == null) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .query(queriesS.addNewSpecialty);

    res.json({ name });
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const getSpecialtyById = async (req, res) => {
  const { especialidad_id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("especialidad_id", especialidad_id)
    .query(queriesS.getSpeciatyById);

  //console.log(result);
  res.send(result.recordset[0]);
};

export const deleteEspecialtyById = async (req, res) => {
  const { especialidad_id } = req.params;

  const pool = await getConnection();
  await pool
    .request()
    .input("especialidad_id", especialidad_id)
    .query(queriesS.deleteSpecialty);

  res.sendStatus(204);
};

export const getTotalSpecialties = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queriesS.getTotalSpecialy);

  res.json(result.recordset[0][""]);
};

  

