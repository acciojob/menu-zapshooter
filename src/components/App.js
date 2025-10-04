import React, { useState } from "react";
import Menu from "./Menu";
import "../styles/App.css";

const App = () => {
  const menuItems = [
    { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Omelette", category: "Breakfast", price: "$4", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Burger", category: "Lunch", price: "$8", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Pizza", category: "Lunch", price: "$10", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Chocolate Shake", category: "Shakes", price: "$6", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Vanilla Shake", category: "Shakes", price: "$6", image: "https://via.placeholder.com/100" },
  ];

  const [filter, setFilter] = useState("All");

  return (
    <div id="main">
      <h1>Menu Application</h1>
      <div className="filter-buttons">
        <button id="filter-btn-1" onClick={() => setFilter("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => setFilter("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => setFilter("Shakes")}>Shakes</button>
        <button onClick={() => setFilter("All")}>All</button>
      </div>
      <Menu items={menuItems} filter={filter} />
    </div>
  );
};

export default App;
