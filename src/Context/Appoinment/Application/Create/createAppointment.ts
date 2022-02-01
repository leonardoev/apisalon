import bodyParser from "body-parser";
import ClientFirstName from "../../../Client/Domain/ClientFirstName";
import Appointment from "../../Domain/Appointment";
import AppointmentId from "../../Domain/AppointmentId";

const createAppointment =
  (appointmentRepo: AppointmentRepository) => async (body: Appointment) => {
    const appointment = new Appointment(
      AppointmentId.random(),
      body.clientFullName,
      body.serviceName,
      body.date 
    );

    return { message: "Confirm your email" };
  };
export default createAppointment;
