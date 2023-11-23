import express  from "express";
import config from "./config";

import PatientRoutes from "./routes/MA.routes";
import DoctorRoutes from "./routes/Doctor.routes";


const app = express();

//settings
app.set("port", config.port)

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(PatientRoutes, DoctorRoutes);

export default app;