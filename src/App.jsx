import { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUser] = useState([]);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form fields", formFields);
    setUser([...users, formFields]);
    setFormFields({
      name: "",
      email: "",
      password: "",
    });
    setShowForm(false);
  };
  return (
    <>
      <button onClick={() => setShowForm(true)}>Show Form</button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formFields.name}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formFields.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <table>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>password</th>
        </tr>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
