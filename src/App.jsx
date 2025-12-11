import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  // ========================================
  // STATE MANAGEMENT
  // ========================================
  
  // TODO: Create state for your hobby activities (starts as empty array)
  const [activities, setActivities] = useState([]);

  // TODO: Create state to control if the form is showing (boolean)

  // TODO: Create state for form data (for a new activity)
  const [name, setName] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [notes, setNotes] = useState('');

  // TODO: Create state for loading status
  const [loading, setLoading] = useState(true);
  
  // ========================================
  // API BASE URL

  // ========================================
  
  // TODO: Update this to match your server's URL
  const API_URL = 'https://hobby-tracker-back-end.onrender.com/api/activities';

  // ========================================
  // FETCH DATA ON PAGE LOAD
  // ========================================
  
  // TODO: Use useEffect to fetch data when component mounts
  useEffect(() => {
        async function getData() {
          try {
              const response = await fetch(API_URL);
              const data = await response.json();
              console.log(data);

              setActivities(data.data);
          } catch (error) {
              console.error("Error fetching activities:", error);
          }

          setLoading(false);
      }

      getData();
    }, []);

    if (loading) {
        return <h2>Loading Activities Data...</h2>;
    }
  // Empty dependency array means this runs once on mount

  // ========================================
  // API FUNCTIONS
  // ========================================

  // READ - Fetch all activities from our Redis database
  const fetchActivites = async () => {
    try {
      // TODO: Make a GET request to fetch all activities
  
      // TODO: Convert response to JSON
   
      // TODO: Update activities state with the data
 
      // TODO: Set loading to false
 
    } catch (error) {
      console.error('Error fetching activities:', error);
      setLoading(false);
    }
  };

  // CREATE - Add a new activity our Redis database
  const createActivity = async (newActivity) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newActivity),
      });

      const data = await response.json();
      setActivities((prev) => [...prev, data.data]);

    } catch (error) {
      console.error('Error creating activity:', error);
    }
  };

  // DELETE - Remove an activity from our Redis database
  const deleteActivity = async (id) => {
    try {
      // TODO: Make a DELETE request to remove the activity
      
      // TODO: Remove the activity from activities state

    } catch (error) {
      console.error('Error deleting activity:', error);
    }
  };

  // UPDATE - Update an existing activity on our Redis database
  const updateActivity = async (id, updatedactivity) => {
    try {
      // TODO: Make a PUT request to update the activity
      
      // TODO: Update the activities state with the modified activity

    } catch (error) {
      console.error('Error updating activity:', error);
    }
  };

  // ========================================
  // EVENT HANDLER FUNCTIONS
  // ========================================

  // Handle clicking "Add" button
  const handleAdd = () => {
    // TODO: Reset formData to empty values

    // TODO: Show the form (setShowForm to true)

  };

  // Handle clicking "Delete" button on an activity
  const handleDelete = async (id) => {
    // TODO: Show confirmation dialog
   
    // TODO: Call deleteActivity(id)
  };

  // Handle saving the form (Create or Update)
  const handleSave = async () => {
    if (!name || !timeSpent) {
      alert('Please fill out name and time spent.');
      return;
    }

    await createActivity({ name, timeSpent, notes });
  };

  // ========================================
  // RENDER
  // ========================================

  // Show loading message while fetching data
  return (
    <div className="container">
      {/* ========================================
          HEADER SECTION
          ======================================== */}
      

      {/* ========================================
          ADD BUTTON
          ======================================== */}
      

      {/* ========================================
          MODAL FORM (Add/Edit)
          ======================================== */}
      

      {/* ========================================
          DATA TABLE
          ======================================== */}
        <input 
  placeholder="Name of activity"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input 
  placeholder="Time Spent"
  value={timeSpent}
  onChange={(e) => setTimeSpent(e.target.value)}
/>

<input 
  placeholder="Notes"
  value={notes}
  onChange={(e) => setNotes(e.target.value)}
/>

        <button onClick={handleSave}>Add Activity</button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Spent (minutes)</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.timeSpent}</td>
                <td>{activity.notes}</td>
                <td>
                  {/* Add action buttons here */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default App

/* ========================================
   SERVER API ROUTES REFERENCE
   ========================================
*/