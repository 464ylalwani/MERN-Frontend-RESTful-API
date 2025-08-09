import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h1>Users list</h1>
      {users.map((user) => (
        <div className="user-card" key={user._id}>
          <p>
            <strong>{user.name}</strong>({user.age})
          </p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
