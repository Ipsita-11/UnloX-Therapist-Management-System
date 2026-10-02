import { useState } from "react";

function BrandedLink() {
  const [copied, setCopied] = useState(false);

  const therapistLink = "https://unlox.com/dr-ananya-sharma";

  const copyLink = () => {
    navigator.clipboard.writeText(therapistLink);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="branded-link-page">
      <h1>Branded Therapist Link</h1>
      <p>Share your personalized booking link with clients.</p>

      <div className="branded-link-card">
        <h2>Dr. Ananya Sharma</h2>

        <p>Your therapist booking link:</p>

        <div className="link-box">
          <span>{therapistLink}</span>

          <button onClick={copyLink}>
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>

        <p className="link-info">
          Clients can use this link to view your profile and request an
          appointment.
        </p>
      </div>
    </div>
  );
}

export default BrandedLink;