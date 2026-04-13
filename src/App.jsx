import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Wedding</h1>
        <p>We're so excited to celebrate with you!</p>
      </header>
      <section className="details">
        <h2>Details</h2>
        <p>Date: April 13, 2026</p>
        <p>Location: The Grand Hall, City Center</p>
      </section>
      <section className="rsvp">
        <h2>RSVP</h2>
        <p>Please let us know if you can make it!</p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default App;