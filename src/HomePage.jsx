import {use, UseState} from 'react';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Activity Tracker App!</h1>
      <p>Track your favorite activities with ease!</p>
      <input placeholder="Enter your activity here"
      type= "text"
      onChange={HandleChange}
      ></input>

      <button onClick={HandleClick}>Add Activity</button>
    </div>
  );
}

export default HomePage;