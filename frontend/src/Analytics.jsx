import { useState } from "react";

function Analytics() {
  const [period, setPeriod] = useState("This Month");

  const stats = [
    {
      title: "Total Clients",
      value: "24",
      description: "Active clients",
    },
    {
      title: "Appointments",
      value: "18",
      description: "This month",
    },
    {
      title: "Total Sessions",
      value: "42",
      description: "Completed sessions",
    },
    {
      title: "Total Revenue",
      value: "₹32,500",
      description: "This month",
    },
  ];

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p>Track your therapy practice performance.</p>
        </div>

        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="analytics-grid">
        {stats.map((stat) => (
          <div className="analytics-card" key={stat.title}>
            <h3>{stat.title}</h3>
            <h2>{stat.value}</h2>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="analytics-summary">
        <h2>{period} Summary</h2>

        <div className="summary-row">
          <span>Completed Appointments</span>
          <strong>15</strong>
        </div>

        <div className="summary-row">
          <span>Pending Appointments</span>
          <strong>3</strong>
        </div>

        <div className="summary-row">
          <span>Paid Payments</span>
          <strong>₹28,500</strong>
        </div>

        <div className="summary-row">
          <span>Pending Payments</span>
          <strong>₹4,000</strong>
        </div>

        <div className="summary-row">
          <span>Average Sessions per Client</span>
          <strong>1.75</strong>
        </div>
      </div>
    </div>
  );
}

export default Analytics;