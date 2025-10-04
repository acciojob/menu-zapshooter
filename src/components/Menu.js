import React from "react";

const Menu = ({ items, filter }) => {
  const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

  return(
    <div className="menu-container">
      {filteredItems.map(item => {
        let testId = "";
        if (item.category === "Breakfast") testId = "menu-item-breakfast";
        if (item.category === "Lunch") testId = "menu-item-lunch";
        if (item.category === "Shakes") testId = "menu-item-shakes";

        return (
          <div key={item.id} className="menu-item" data-test-id={testId}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
