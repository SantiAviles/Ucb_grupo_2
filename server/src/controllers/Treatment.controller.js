import { getConnection, sql } from "../database";
import { queriesT } from "../database/querys";

/* Tratamientos */

 export const getTreatments = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesT.getAllTreatment);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const createNewTreatment = async (req, res) => {
  const { name, description} = req.body;
  let { cost } = req.body;

  if (
    name == null ||
    description == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  if (cost == null) cost = 0,0;
  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("cost", sql.Decimal, cost)
      .query(queriesT.addNewTreatment);

    res.json({ name, description, cost});
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const getTreatmentById = async (req, res) => {
  const { tratamiento_id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("tratamiento_id", tratamiento_id)
    .query(queriesT.getTreatmentById);

  //console.log(result);
  res.send(result.recordset[0]);
};

export const deleteTreatmentById = async (req, res) => {
  const { tratamiento_id } = req.params;

  const pool = await getConnection();
  await pool
    .request()
    .input("tratamiento_id", tratamiento_id)
    .query(queriesT.deleteTreatment);

  res.sendStatus(204);
};

export const getTotalTreatments = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queriesT.getTotalTreatment);

  res.json(result.recordset[0][""]);
};

export const updateTreatmentById = async (req, res) => {
    const { name, description, cost } = req.body;
    const { tratamiento_id } = req.params;
  
    if (
      name == null ||
      description == null ||
      cost == null
    ) {
      return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
    }
  
    const pool = await getConnection();
  
    await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("description", sql.VarChar, description)
      .input("cost", sql.Decimal, cost)
      .input("tratamiento_id", sql.Int, tratamiento_id)
      .query(queriesT.updateTreatment);
  
    res.json({ name, description, cost });
  };
