import "./App.css";
import Appointments from "./Appointments";
import Clients from "./Clients";
import ClinicalNotes from "./ClinicalNotes";
import Payments from "./Payments";
import Messages from "./Messages";
import Analytics from "./Analytics";
import TherapistProfile from "./TherapistProfile";
import BrandedLink from "./BrandedLink";
import { useState } from "react";

function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showBrandedLink, setShowBrandedLink] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (isRegister && !name)) {
      setMessage("Please fill all fields.");
      return;
    }

    if (isRegister) {
      setMessage("Registration successful! Please login.");
      setIsRegister(false);
      setName("");
      setPassword("");
    } else {
      setIsLoggedIn(true);
    }
  };

  const switchMode = () => {
    setIsRegister(!isRegister);
    setMessage("");
    setEmail("");
    setPassword("");
    setName("");
  };

if (isLoggedIn && showProfile) {
  return (
    <div>
      <button onClick={() => setShowProfile(false)}>
        ← Back to Dashboard
      </button>

      <TherapistProfile />
    </div>
  );
}

if (isLoggedIn && showBrandedLink) {
  return (
    <div>
      <button onClick={() => setShowBrandedLink(false)}>
        ← Back to Dashboard
      </button>

      <BrandedLink />
    </div>
  );
}

if (isLoggedIn && showAnalytics) {
  return (
    <div>
      <button onClick={() => setShowAnalytics(false)}>
        ← Back to Dashboard
      </button>

<button onClick={() => setShowBrandedLink(true)}>
  Branded Therapist Link
</button>
      <Analytics />
    </div>
  );
}  

if (isLoggedIn && showMessages) {
  return (
    <div>
      <button onClick={() => setShowMessages(false)}>
        ← Back to Dashboard
      </button>

      <Messages />
    </div>
  );
}  

if (isLoggedIn && showPayments) {
  return (
    <div>
      <button onClick={() => setShowPayments(false)}>
        ← Back to Dashboard
      </button>

      <Payments />
    </div>
  );
}

  if (isLoggedIn && showNotes) {
  return (
    <div>
      <button onClick={() => setShowNotes(false)}>
        ← Back to Dashboard
      </button>

      <ClinicalNotes />
    </div>
  );
}

  if (isLoggedIn && showClients) {
  return (
    <div>
      <button onClick={() => setShowClients(false)}>
        ← Back to Dashboard
      </button>

      <Clients />
    </div>
  );
}

  if (isLoggedIn && showAppointments) {   
    return (
      <div>
        <button
          onClick={() => setShowAppointments(false)}
          style={{
            margin: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#2563eb",
            color: "white",
            cursor: "pointer"
          }}
        >
          ← Back to Dashboard
        </button>

        <Appointments />
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <div className="dashboard">
        <header className="dashboard-header">
          <div>
            <h1>UnloX</h1>
            <p>Therapist Management Platform</p>
          </div>

          <button
            className="logout-btn"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        </header>

        <main className="dashboard-content">
          <h2>Welcome to your Dashboard 👋</h2>

          <p className="subtitle">
            Manage your therapy practice from one place.
          </p>

          <div className="stats">
            <div className="stat-card">
              <h3>12</h3>
              <p>Total Clients</p>
            </div>

            <div className="stat-card">
              <h3>5</h3>
              <p>Today's Appointments</p>
            </div>

            <div className="stat-card">
              <h3>8</h3>
              <p>Pending Requests</p>
            </div>

            <div className="stat-card">
              <h3>₹8,500</h3>
              <p>This Month</p>
            </div>
          </div>

          <h2 className="section-title">Quick Access</h2>

          <div className="features">

            <div className="feature-card">
              <div className="icon">📅</div>
              <h3>Appointments</h3>
              <p>Manage upcoming sessions and bookings.</p>

              <button onClick={() => setShowAppointments(true)}>
                View Appointments
              </button>
            </div>

            <div className="feature-card">
              <div className="icon">👥</div>
              <h3>Clients</h3>
              <p>View and manage your client information.</p>
              <button onClick={() => setShowClients(true)}>
  View Clients</button>
            </div>

            <div className="feature-card">
              <div className="icon">📝</div>
              <h3>Clinical Notes</h3>
              <p>Create and manage session notes.</p>
              <button onClick={() => setShowNotes(true)}>
  View Notes</button>
            </div>

            <div className="feature-card">
              <div className="icon">💳</div>
              <h3>Payments</h3>
              <p>Track payments and packages.</p>
              <button onClick={() => setShowPayments(true)}> View Payments</button>
            </div>

            <div className="feature-card">
              <div className="icon">💬</div>
              <h3>Messages</h3>
              <p>Communicate with your clients.</p>
              <button onClick={() => setShowMessages(true)}>
  Open Messages</button>
            </div>

            <div className="feature-card">
              <div className="icon">📊</div>
              <h3>Analytics</h3>
              <p>View practice performance insights.</p>
              <button onClick={() => setShowAnalytics(true)}>
  View Analytics</button>
            </div>

          </div>
        </main>
      </div>
    );
  }

<button
  className="logout-button"
  onClick={() => setIsLoggedIn(false)}
>
  Logout
</button>

  return (
    <div className="app">
      <div className="card">

        <h1>UnloX</h1>

        <p>Therapist Management Platform</p>

        <h2>{isRegister ? "Create Account" : "Login"}</h2>

        <form onSubmit={handleSubmit}>

          {isRegister && (
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>

        </form>

        {message && <p className="message">{message}</p>}

        <p className="signup">
          {isRegister
            ? "Already have an account? "
            : "Don't have an account? "}

          <span onClick={switchMode}>
            {isRegister ? "Login" : "Register"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default App;