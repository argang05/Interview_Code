import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const initialData = [
    { name: "Rajesh Aggarwal", age: 25, description: "Software Engineer" },
    { name: "Shweta Mallick", age: 30, description: "Graphic Designer" },
    { name: "Raj Singh", age: 22, description: "Data Analyst" },
    { name: "Arnav Kumar", age: 35, description: "Project Manager" },
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.age.toString().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Searchable List</h1>
      <input
        className="searchBox"
        type="text"
        placeholder="Search by name, age, or description"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="listOfData">
        {filteredData.map((item, index) => (
          <div className="container" key={index}>
            <p>
              <strong>Name:</strong> {item.name}
            </p>
            <p>
              <strong>Age:</strong> {item.age}
            </p>
            <p>
              <strong>Description:</strong> {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
