import { useEffect, useState } from "react";
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
    maxWidth: '900px',
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
  },
  deleteButton: {
    background: '#fc8181',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.2s'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  th: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '16px',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  td: {
    padding: '16px',
    borderBottom: '1px solid #e2e8f0',
    color: '#2d3748'
  }
};

export default function ViewActivities() {
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        setActivities(json.data);
      } catch (error) {
        console.error("Error loading activities:", error);
      }
    }
    load();
  }, []);

  const deleteActivity = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setActivities((prev) => prev.filter((act) => act.id !== id));
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h2 style={styles.heading}>Your Activities</h2>
      <p style={styles.subheading}>
        {activities.length > 0 
          ? `You've logged ${activities.length} ${activities.length === 1 ? 'activity' : 'activities'}!`
          : 'No activities yet. Start tracking!'}
      </p>
      
      {activities.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Time Spent</th>
              <th style={styles.th}>Notes</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a) => (
              <tr key={a.id}>
                <td style={styles.td}>{a.name}</td>
                <td style={styles.td}>{a.timeSpent}</td>
                <td style={styles.td}>{a.notes || '—'}</td>
                <td style={styles.td}>
                  <button 
                    onClick={() => deleteActivity(a.id)}
                    style={styles.deleteButton}
                    onMouseOver={(e) => e.target.style.background = '#f56565'}
                    onMouseOut={(e) => e.target.style.background = '#fc8181'}
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: '#718096',
          fontSize: '1.1rem'
        }}>
          No activities to display yet
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <button 
          onClick={() => navigate("/add")}
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
          ➕ Add Activity
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
  </div>
); // <-- close the return
} // <-- close the component function
