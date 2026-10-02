import { useState } from "react";

function Clients() {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@example.com",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Das",
      email: "priya@example.com",
      phone: "9123456780",
      status: "Active",
    },
    {
      id: 3,
      name: "Ananya Singh",
      email: "ananya@example.com",
      phone: "9988776655",
      status: "Inactive",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");

  const addClient = () => {
    if (!newName || !newEmail || !newPhone) {
      alert("Please fill all client details");
      return;
    }

    const newClient = {
      id: Date.now(),
      name: newName,
      email: newEmail,
      phone: newPhone,
      status: "Active",
    };

    setClients([newClient, ...clients]);

    setNewName("");
    setNewEmail("");
    setNewPhone("");
    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setClients(
      clients.map((client) =>
        client.id === id
          ? {
              ...client,
              status: client.status === "Active" ? "Inactive" : "Active",
            }
          : client
      )
    );
  };

  const deleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div className="clients-page">
      <button
        className="new-client-button"
        onClick={() => setShowForm(!showForm)}
      >
        + Add New Client
      </button>

      <h1>Clients</h1>
      <p>View and manage your client information.</p>

      {showForm && (
        <div className="client-form">
          <input
            type="text"
            placeholder="Client Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />

          <button onClick={addClient}>Save Client</button>
        </div>
      )}

      <div className="client-list">
        {clients.map((client) => (
          <div className="client-card" key={client.id}>
            <div>
              <h3>{client.name}</h3>
              <p>📧 {client.email}</p>
              <p>📱 {client.phone}</p>
            </div>

            <div className="client-right">
              <span
                className={`client-status ${client.status.toLowerCase()}`}
              >
                {client.status}
              </span>

              <button onClick={() => toggleStatus(client.id)}>
                Change Status
              </button>

              <button
                className="delete-client-button"
                onClick={() => deleteClient(client.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;