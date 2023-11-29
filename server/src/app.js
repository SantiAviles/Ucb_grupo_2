import express from 'express';
import cors from 'cors';
import config from './config';
import morgan from "morgan";

import PatientRoutes from './routes/Patient.routes';
import DoctorRoutes from './routes/Doctor.routes';
import SpecialtyRoutes from './routes/Specialty.routes';
import AppointmentRoutes from './routes/Appointment.routes';
import TreatmentRoutes from './routes/Treatment.routes';
import MedicalRecordRoutes from './routes/MedicalRecord.routes';
import ScheduleRoutes from './routes/Schedule.routes';

const app = express();




// Settings
app.set('port', config.port);

// Middlewares
app.use(cors());
//app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use(PatientRoutes);
app.use(DoctorRoutes);
app.use(SpecialtyRoutes);
app.use(AppointmentRoutes);
app.use(TreatmentRoutes);
app.use(MedicalRecordRoutes);
app.use(ScheduleRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});

export default app;