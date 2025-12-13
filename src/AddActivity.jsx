import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://hobby-tracker-back-end.onrender.com/api/activities";

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  card: {
    maxWidth: '600px',
    margin: '0 auto',
    background: 'white',
    borderRadius: '16px',
    padding: '40px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    marginTop: '60px'
  },
  heading: {
    fontSize: '2rem',
    color: '#2d3748',
    marginBottom: '10px',
    fontWeight: '700'
  },
  subheading: {
    fontSize: '1.1rem',
    color: '#718096',
    marginBottom: '30px'
  },
  input: {
    width: '100%',
    padding: '14px 16px',
    fontSize: '16px',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    marginBottom: '16px',
    transition: 'border-color 0.3s',
    boxSizing: 'border-box'
  },
  button: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'transform 0.2s, box-shadow 0.2s',
    marginRight: '10px',
    marginTop: '10px'
  },
  secondaryButton: {
    background: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '14px 28px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s',
    marginRight: '10px',
    marginTop: '10px'
  }
};

export default function AddActivity() {
  const [name, setName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const createActivity = async () => {
    if (!name || !timeSpent) {
      alert("Please fill out name and time spent.");
      return;
    }
    try {
      const newActivity = { name, timeSpent, notes };
      await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newActivity),
      });
      setName("");
      setTimeSpent("");
      setNotes("");
      alert("Activity saved!");
    } catch (error) {
      console.error("Error creating activity:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add New Activity</h2>
        <p style={styles.subheading}>
          Log your hobby time and track your progress
        </p>
        <div>
          <input
            style={styles.input}
            placeholder="Activity Name (e.g., Guitar Practice)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>
        <div>
          <input
            style={styles.input}
            placeholder="Time Spent (e.g., 30 minutes)"
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>
        <div>
          <input
            style={styles.input}
            placeholder="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>
        <button 
          onClick={createActivity}
          style={styles.button}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          💾 Save Activity
        </button>
        <button 
          onClick={() => navigate("/view")}
          style={styles.secondaryButton}
          onMouseOver={(e) => {
            e.target.style.background = '#667eea';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#667eea';
          }}
        >
          View Activities
        </button>
        <button 
          onClick={() => navigate("/")}
          style={styles.secondaryButton}
          onMouseOver={(e) => {
            e.target.style.background = '#667eea';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#667eea';
          }}
        >
          🏠 Home
        </button>
      </div>
    </div>
  );
}