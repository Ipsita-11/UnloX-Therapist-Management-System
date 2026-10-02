import { useState } from "react";

function ClinicalNotes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      client: "Rahul Sharma",
      date: "2026-10-02",
      session: "Initial Consultation",
      note: "Discussed client's current concerns and treatment goals.",
    },
    {
      id: 2,
      client: "Priya Das",
      date: "2026-10-01",
      session: "Follow-up Session",
      note: "Reviewed progress and discussed next steps.",
    },
    {
      id: 3,
      client: "Ananya Singh",
      date: "2026-09-30",
      session: "Therapy Session",
      note: "Discussed recent experiences and coping strategies.",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newClient, setNewClient] = useState("");
  const [newSession, setNewSession] = useState("Therapy Session");
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (!newClient || !newNote) {
      alert("Please fill all note details");
      return;
    }

    const note = {
      id: Date.now(),
      client: newClient,
      date: new Date().toISOString().split("T")[0],
      session: newSession,
      note: newNote,
    };

    setNotes([note, ...notes]);

    setNewClient("");
    setNewSession("Therapy Session");
    setNewNote("");
    setShowForm(false);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="notes-page">
      <button
        className="new-note-button"
        onClick={() => setShowForm(!showForm)}
      >
        + Add New Note
      </button>

      <h1>Clinical Notes</h1>
      <p>Manage and record your therapy session notes.</p>

      {showForm && (
        <div className="note-form">
          <input
            type="text"
            placeholder="Client Name"
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
          />

          <select
            value={newSession}
            onChange={(e) => setNewSession(e.target.value)}
          >
            <option>Therapy Session</option>
            <option>Initial Consultation</option>
            <option>Follow-up Session</option>
            <option>Assessment Session</option>
          </select>

          <textarea
            placeholder="Write a clinical note..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          />

          <button onClick={addNote}>Save Note</button>
        </div>
      )}

      <div className="notes-list">
        {notes.map((note) => (
          <div className="note-card" key={note.id}>
            <div className="note-header">
              <div>
                <h3>{note.client}</h3>
                <p>📅 {note.date}</p>
                <p>📝 {note.session}</p>
              </div>

              <button
                className="delete-note-button"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </div>

            <div className="note-content">
              <p>{note.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClinicalNotes;