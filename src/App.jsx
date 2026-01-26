import { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formFields]);
    setFormFields({
      name: "",
      email: "",
    });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <button className="button" onClick={() => setShowForm(!showForm)}>
        Toggle form
      </button>

      {showForm && (
        <form className="card" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formFields.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
          <button className="submit" type="submit">
            submit
          </button>
        </form>
      )}

      <table width={100} className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
