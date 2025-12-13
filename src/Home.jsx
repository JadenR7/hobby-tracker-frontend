import { Link } from "react-router-dom";

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
    fontSize: '2.5rem',
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
  }
};

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>🎯 My Hobby Tracker</h1>
        <p style={styles.subheading}>Track your progress and build better habits!</p>
        <Link to="/add">
          <button 
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
            ✨ Add Activity
          </button>
        </Link>
        <div>
          <Link to="/view">
            <button 
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
              📋 View Activities
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}