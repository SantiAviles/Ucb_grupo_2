import { getConnection, sql } from "../database";
import { queriesH } from "../database/querys";

/* Horarios */

export const getSchedule = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queriesH.getAllSchedule);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};

export const createNewSchedule = async (req, res) => {
  const { id_doctor, day_week, hour_start, hour_end } = req.body;

  if ( id_doctor == null || day_week == null || hour_start == null || hour_end == null) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id_doctor", sql.Int, id_doctor)
      .input("day_week", sql.VarChar, day_week)
      .input("hour_start", sql.Time, hour_start)
      .input("hour_end", sql.Time, hour_end)
      .query(queriesH.addNewSchedule);

    res.json({ id_doctor, day_week, hour_start, hour_end });
  } catch (error) {
    res.status(500);
    res.send(error.msg);
  }
};


export const getScheduleById = async (req, res) => {
  const { horario_id } = req.params;

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("horario_id", horario_id)
    .query(queriesH.getScheduleById);

  //console.log(result);
  res.send(result.recordset[0]);
};

export const deleteScheduleById = async (req, res) => {
  const { horario_id } = req.params;

  const pool = await getConnection();
  await pool
    .request()
    .input("horario_id", horario_id)
    .query(queriesH.deleteSchedule);

  res.sendStatus(204);
};

export const getTotalSchedule = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queriesH.getTotalSchedule);

  res.json(result.recordset[0][""]);
};

export const updateScheduleById = async (req, res) => {
  const { id_doctor, day_week, hour_start, hour_end } = req.body;
  const { horario_id } = req.params;

  if (
    id_doctor == null ||
    day_week == null ||
    hour_start == null ||
    hour_end == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
  }

  const pool = await getConnection();

  await pool
    .request()
    .input("id_doctor", sql.Int, id_doctor)
    .input("day_week", sql.VarChar, day_week)
    .input("hour_start", sql.Time, hour_start)
    .input("hour_end", sql.Time, hour_end)
    .input("horario_id", sql.Int, horario_id)
    .query(queriesH.updateSchedule);

  res.json({ id_doctor, day_week, hour_start, hour_end });
};

