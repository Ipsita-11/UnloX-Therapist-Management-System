import { useState } from "react";

function Appointments() {
  const [showForm, setShowForm] = useState(false);

  const [newClient, setNewClient] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [newType, setNewType] = useState("Online");

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      client: "Rahul Sharma",
      date: "2026-10-03",
      time: "10:00 AM",
      type: "Online",
      status: "Confirmed",
    },
    {
      id: 2,
      client: "Priya Das",
      date: "2026-10-03",
      time: "12:00 PM",
      type: "In-Person",
      status: "Pending",
    },
    {
      id: 3,
      client: "Ananya Singh",
      date: "2026-10-04",
      time: "03:00 PM",
      type: "Online",
      status: "Confirmed",
    },
  ]);

  const cancelAppointment = (id) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: "Cancelled" }
          : appointment
      )
    );
  };

  const addAppointment = () => {
    if (!newClient || !newDate || !newTime) {
      alert("Please fill all details");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      client: newClient,
      date: newDate,
      time: newTime,
      type: newType,
      status: "Pending",
    };

    setAppointments([newAppointment, ...appointments]);

    setNewClient("");
    setNewDate("");
    setNewTime("");
    setNewType("Online");
    setShowForm(false);
  };

  return (
    <div className="appointments-page">
      <button onClick={() => setShowForm(!showForm)}>
        + New Appointment
      </button>

      <h1>Appointments</h1>
      <p>Manage your upcoming therapy sessions.</p>

      {showForm && (
        <div className="appointment-form">
          <input
            type="text"
            placeholder="Client Name"
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
          />

          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />

          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />

          <select
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
          >
            <option>Online</option>
            <option>In-Person</option>
          </select>

          <button onClick={addAppointment}>
            Save Appointment
          </button>
        </div>
      )}

      <div className="appointment-list">
        {appointments.map((appointment) => (
          <div className="appointment-card" key={appointment.id}>
            <div>
              <h3>{appointment.client}</h3>
              <p>📅 {appointment.date}</p>
              <p>⏰ {appointment.time}</p>
              <p>💻 {appointment.type}</p>
            </div>

            <div className="appointment-right">
              <span
                className={`status ${appointment.status.toLowerCase()}`}
              >
                {appointment.status}
              </span>

              {appointment.status !== "Cancelled" && (
                <button
                  onClick={() => cancelAppointment(appointment.id)}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;