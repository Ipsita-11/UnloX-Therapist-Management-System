import { useState } from "react";

function Payments() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      client: "Rahul Sharma",
      amount: "1500",
      date: "2026-10-02",
      method: "UPI",
      status: "Paid",
    },
    {
      id: 2,
      client: "Priya Das",
      amount: "2000",
      date: "2026-10-01",
      method: "Card",
      status: "Pending",
    },
    {
      id: 3,
      client: "Ananya Singh",
      amount: "1200",
      date: "2026-09-30",
      method: "UPI",
      status: "Paid",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const [newClient, setNewClient] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newMethod, setNewMethod] = useState("UPI");

  const addPayment = () => {
    if (!newClient || !newAmount) {
      alert("Please fill all payment details");
      return;
    }

    const newPayment = {
      id: Date.now(),
      client: newClient,
      amount: newAmount,
      date: new Date().toISOString().split("T")[0],
      method: newMethod,
      status: "Pending",
    };

    setPayments([newPayment, ...payments]);

    setNewClient("");
    setNewAmount("");
    setNewMethod("UPI");
    setShowForm(false);
  };

  const markAsPaid = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id
          ? { ...payment, status: "Paid" }
          : payment
      )
    );
  };

  const deletePayment = (id) => {
    setPayments(
      payments.filter((payment) => payment.id !== id)
    );
  };

  return (
    <div className="payments-page">
      <button
        className="new-payment-button"
        onClick={() => setShowForm(!showForm)}
      >
        + Add Payment
      </button>

      <h1>Payments</h1>
      <p>Manage your client payments and transactions.</p>

      {showForm && (
        <div className="payment-form">
          <input
            type="text"
            placeholder="Client Name"
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />

          <select
            value={newMethod}
            onChange={(e) => setNewMethod(e.target.value)}
          >
            <option>UPI</option>
            <option>Card</option>
            <option>Cash</option>
            <option>Bank Transfer</option>
          </select>

          <button onClick={addPayment}>Save Payment</button>
        </div>
      )}

      <div className="payment-list">
        {payments.map((payment) => (
          <div className="payment-card" key={payment.id}>
            <div>
              <h3>{payment.client}</h3>
              <p>💰 Amount: ₹{payment.amount}</p>
              <p>📅 {payment.date}</p>
              <p>💳 Method: {payment.method}</p>
            </div>

            <div className="payment-right">
              <span
                className={`payment-status ${payment.status.toLowerCase()}`}
              >
                {payment.status}
              </span>

              {payment.status === "Pending" && (
                <button onClick={() => markAsPaid(payment.id)}>
                  Mark as Paid
                </button>
              )}

              <button
                className="delete-payment-button"
                onClick={() => deletePayment(payment.id)}
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

export default Payments;