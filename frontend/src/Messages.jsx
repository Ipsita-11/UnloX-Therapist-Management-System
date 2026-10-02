import { useState } from "react";

function Messages() {
  const [selectedClient, setSelectedClient] = useState("Rahul Sharma");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Rahul Sharma",
      text: "Hello, I wanted to confirm my appointment.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "You",
      text: "Sure! Your appointment is confirmed.",
      time: "10:35 AM",
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }

    const newMessage = {
      id: Date.now(),
      sender: "You",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const deleteMessage = (id) => {
    setMessages(
      messages.filter((msg) => msg.id !== id)
    );
  };

  return (
    <div className="messages-page">
      <h1>Messages</h1>
      <p>Communicate with your clients.</p>

      <div className="chat-box">
        <div className="client-select">
          <label>Select Client</label>

          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option>Rahul Sharma</option>
            <option>Priya Das</option>
            <option>Ananya Singh</option>
          </select>
        </div>

        <div className="message-list">
          {messages.map((msg) => (
            <div
              className={`message ${
                msg.sender === "You" ? "sent" : "received"
              }`}
              key={msg.id}
            >
              <div>
                <p>{msg.text}</p>
                <small>{msg.time}</small>
              </div>

              <button
                className="delete-message-button"
                onClick={() => deleteMessage(msg.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;