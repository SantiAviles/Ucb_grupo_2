import { getConnection, sql, queries } from "../database";

/* Pacientes */
export const getPacientes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllPatients);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.msg);
    }
};

export const createNewPacient = async (req, res) => {

    const { name, last_name, birthdate } = req.body;
    let { cel } = req.body;

    if (name == null || last_name == null || birthdate == null) {
        return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
    }

    if (cel == null) cel = 0;

    try {
        const pool = await getConnection();

        await pool.request()
            .input("name", sql.VarChar, name)
            .input("last_name", sql.VarChar, last_name)
            .input("birthdate", sql.Date, birthdate)
            .input("cel", sql.Int, cel)
            .query(queries.addNewPatient);

        res.json({ name, last_name, birthdate, cel });
    } catch (error) {
        res.status(500);
        res.send(error.msg);
    }
};

export const getPatientId = async (req, res) => {
    const { paciente_id } = req.params;

    const pool = await getConnection();
    const result = await pool.request()
        .input("paciente_id", paciente_id)
        .query(queries.getPatientById);

    //console.log(result);
    res.send(result.recordset[0]);
};

export const deletePatientById = async (req, res) => {
    const { paciente_id } = req.params;

    const pool = await getConnection();
    const result = await pool
        .request()
        .input("paciente_id", paciente_id)
        .query(queries.deletePatient);

    res.sendStatus(204);
};

export const getTotalPatients = async (req, res) => {

    const pool = await getConnection();
    const result = await pool
        .request()
        .query(queries.getTotalPatient);

    res.json(result.recordset[0][""]);
};

export const updatePatienById = async (req, res) => {
    const { name, last_name, birthdate, cel } = req.body;
    const { paciente_id } = req.params;

    if (name == null || last_name == null || birthdate == null || cel == null) {
        return res.status(400).json({ msg: "Bad Request. Plese Fill all fields" });
    }

    const pool = await getConnection();
    await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("last_name", sql.VarChar, last_name)
        .input("birthdate", sql.Date, birthdate)
        .input("cel", sql.Int, cel)
        .input("paciente_id", sql.Int, paciente_id)
        .query(queries.updatePatient);

    res.json({ name, last_name, birthdate, cel });
};

