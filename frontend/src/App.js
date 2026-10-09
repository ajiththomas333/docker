import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("http://10.10.10.121:3001/api/items")
      .then(res => setItems(res.data));
  }, []);

  const addItem = async () => {
    if (!name.trim()) return;
    await axios.post("http://10.10.10.121:3001/api/items", { name });
    const res = await axios.get("http://10.10.10.121:3001/api/items");
    setItems(res.data);
    setName("");
  };

  return (
    <div className="container">
      <h1>🍓 Fruit List</h1>
      <div className="input-group">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a new fruit..."
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="card-grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
