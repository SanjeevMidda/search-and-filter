import { useEffect, useState } from "react";
import "./index.css";

function App() {
  // purpose: Build a React app that displays a list of users and allows filtering the list using multiple controlled inputs.

  // Requirements

  //   3. Combined filtering logic
  // Users must be filtered using both:
  // - search text
  // - selected role

  // Filtering must be:
  // - case-insensitive
  // - resilient to leading/trailing spaces

  // lf:
  // - search is empty → do not filter by name
  // - role is "All" → do not filter by

  // add user data
  const users = [
    { id: 1, name: "Alice Johnson", role: "Admin" },

    { id: 2, name: "Bob Smith", role: "User" },

    { id: 3, name: "Charlie Brown", role: "User" },

    { id: 4, name: "Diana Prince", role: "Manager" },

    { id: 5, name: "Jack Cork", role: "User" },
  ];

  const [userInput, setUserInput] = useState("");
  const [role, setRole] = useState("all");

  // saving user input
  const savingUserInput = (input) => {
    setUserInput(input.target.value);
  };

  // filter by input
  const filteredUsers = users.filter((user) => user.name.includes(userInput));

  // Saving user dropdown selection
  const roleSelectedFromDropdown = (roleSelected) => {
    setRole(roleSelected.target.value);
  };

  console.log(role);

  // filter by dropdown
  const filterByRole = users.filter((user) =>
    role === "all" ? true : user.role.toLowerCase() === role
  );

  console.log(role);

  return (
    <div className="App">
      <div id="title">
        <div className="circle"></div>
        <h1>Zable Admin</h1>
      </div>

      {/* Display user data */}
      <div className="mainWrapper">
        <div className="filterContainer">
          <input
            type="text"
            value={userInput}
            onChange={(e) => savingUserInput(e)}
            placeholder="Enter name"
          />
          <label>
            <select
              style={{
                // background: `linear-gradient(white, purple)`,
                // border: "grey",
                height: "30px",
                width: "100px",
              }}
              value={role}
              onChange={(e) => roleSelectedFromDropdown(e)}
            >
              <option value="all">All</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="manager">Manager</option>
            </select>
          </label>
        </div>

        <div className="mainUserDataContainer">
          <div className="headings">
            <h2>NAME</h2>
            <h2>ROLE</h2>
          </div>

          <div className="userData">
            {filterByRole.map((user) => {
              return (
                <div className="userinfoContainer">
                  <p>{user.name}</p>
                  <p>{user.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Controlled inputs */}
      {/* Search input */}
      {/* Role filter */}
    </div>
  );
}

export default App;
