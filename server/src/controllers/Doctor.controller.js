import { getConnection, sql, queries } from "../database";
import { queriesD } from "../database/querys";

/* Medicos */
export const getDoctors = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesD.getAllDoctors);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const createNewDoctor = async (req, res) => {
  const { name, last_name, id_specialty } = req.body;
  let { cel } = req.body;

  if (name == null || last_name == null || id_specialty == null) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  if (cel == null) cel = 0;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("last_name", sql.VarChar, last_name)
      .input("id_specialty", sql.Int, id_specialty)
      .input("cel", sql.Int, cel)
      .query(queriesD.addNewDoctor);

    res.json({ name, last_name, id_specialty, cel });
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const getDoctorById = async (req, res) => {
  const { medico_id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("medico_id", medico_id)
    .query(queriesD.getDoctorById);

  //console.log(result);
  res.send(result.recordset[0]);
};

export const deleteDoctorById = async (req, res) => {
  const { medico_id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("medico_id", medico_id)
    .query(queriesD.deleteDoctor);

  res.sendStatus(204);
};

export const getTotalDoctors = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queriesD.getTotalDoctor);

    res.json(result.recordset[0][""]);
};

export const updateDoctorById = async (req, res) => {
    const { name, last_name, id_specialty, cel } = req.body;
    const { medico_id } = req.params;

    if (name == null || last_name == null || id_specialty==null || cel == null) {
        return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
    }

    const pool = await getConnection();
    await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("last_name", sql.VarChar, last_name)
        .input("id_specialty", sql.Int, id_specialty)
        .input("cel", sql.Int, cel)
        .input("medico_id", sql.Int, medico_id)
        .query(queriesD.updateDoctor);

    res.json({ name, last_name, id_specialty, cel });
}; 
