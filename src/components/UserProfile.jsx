// src/components/UserProfile.js
import React, { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,       
      [name]: value     
    }));
  };

  return (
    <>
    <div style={{ padding: "20px", border: "1px solid gray" }}>
      <h2>User Profile 👤</h2>
      <input
        className="one"
        type="text"
        name="name"
        placeholder="Enter Name"
        value={user.name}
        onChange={handleChange}
      />
      <br /><br />
      <input
        className="two"
        type="number"
        name="age"
        placeholder="Enter Age"
        value={user.age}
        onChange={handleChange}
      />
      <br /><br />
      <input 
        className="three"
        type="text"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleChange}
        />
      <br /><br />
      <h3>Preview:</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <br /><br />

      <button onClick={() => alert("your request has been submitted")} className="btn4">
            submit
        </button>

        <button onClick={() => setUser({name: "", age: "", email: ""})} className="btn5">
            Reset
        </button>

    </div>
    </>
  );
}

export default UserProfile;
