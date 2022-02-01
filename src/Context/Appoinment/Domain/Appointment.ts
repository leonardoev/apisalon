import ClientFullName from "../../Client/Domain/ClientFullName";
import ServiceName from "../../Service/Domain/ServiceName";
import AppointmentDate from "./AppointmentDate";
import AppointmentId from "./AppointmentId";
import AppointmentTime from "./AppointmentTime";

class Appointment {
  readonly id: AppointmentId;
  readonly clientFullName: ClientFullName;
  readonly serviceName: ServiceName;
  readonly date: AppointmentDate;
  readonly time: AppointmentTime;

  constructor(
    id: AppointmentId,
    clientFullName: ClientFullName,
    serviceName: ServiceName,
    date: AppointmentDate,
    time: AppointmentTime
  ) {
    this.id = id;
    this.clientFullName = clientFullName;
    this.serviceName = serviceName;
    this.date = date;
    this.time = time;
  }
}
export default Appointment;
