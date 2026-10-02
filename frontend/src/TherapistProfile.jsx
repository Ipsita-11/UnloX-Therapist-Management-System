import { useState } from "react";

function TherapistProfile() {
  const [profile, setProfile] = useState({
    name: "Dr. Ananya Sharma",
    specialization: "Clinical Psychologist",
    email: "ananya@example.com",
    phone: "9876543210",
    experience: "5 Years",
    bio: "Experienced therapist helping clients with personal growth and mental well-being.",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-page">
      <h1>Therapist Profile</h1>
      <p>Manage your professional profile information.</p>

      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">👩‍⚕️</div>

          <div>
            <h2>{profile.name}</h2>
            <p>{profile.specialization}</p>
          </div>
        </div>

        <div className="profile-form">
          <label>Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>Specialization</label>
          <input
            name="specialization"
            value={profile.specialization}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>Email</label>
          <input
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>Phone</label>
          <input
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>Experience</label>
          <input
            name="experience"
            value={profile.experience}
            onChange={handleChange}
            disabled={!editing}
          />

          <label>About</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            disabled={!editing}
          />

          {editing ? (
            <button onClick={handleSave}>Save Profile</button>
          ) : (
            <button onClick={() => setEditing(true)}>
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TherapistProfile;