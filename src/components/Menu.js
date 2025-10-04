import React from "react";

const categoryTestIds = {
  Breakfast: "menu-item-breakfast",
  Lunch: "menu-item-lunch",
  Shakes: "menu-item-shakes"
};

const Menu = ({ menu, filter, setFilter }) => {
  const filteredMenu =
    filter === "All"
      ? menu
      : menu.filter(item => item.category === filter);

  return (
    <div className="menu-container">
      <h1>Our Menu</h1>
      <div className="btn-group">
        <button id="filter-btn-1" onClick={() => setFilter("Breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => setFilter("Lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => setFilter("Shakes")}>
          Shakes
        </button>
        <button onClick={() => setFilter("All")}>All</button>
      </div>
      <div className="menu-list">
        {filteredMenu.map(item => (
          <div
            key={item.id}
            className="menu-item"
            data-test-id={categoryTestIds[item.category]}
          >
            <img src={item.img} alt={item.name} className="menu-img" />
            <div>
              <h4>{item.name} <span>${item.price.toFixed(2)}</span></h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
