import React, { useState } from "react";
import Menu from "./Menu";
import "./styles.css";

const menuData = [
  {
    id: 1,
    name: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://react-projects-5-menu.netlify.app/images/item-1.jpeg",
    desc: "I'm baby woke milkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
  },
  {
    id: 2,
    name: "Diner Double",
    category: "Lunch",
    price: 13.99,
    img: "https://react-projects-5-menu.netlify.app/images/item-2.jpeg",
    desc: "Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
  },
  {
    id: 3,
    name: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "https://react-projects-5-menu.netlify.app/images/item-3.jpeg",
    desc: "Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
  },
  {
    id: 4,
    name: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    img: "https://react-projects-5-menu.netlify.app/images/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoridetch. Prism austin mlkshk truffaut."
  },
  {
    id: 5,
    name: "Egg Attack",
    category: "Lunch",
    price: 22.99,
    img: "https://react-projects-5-menu.netlify.app/images/item-5.jpeg",
    desc: "Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up."
  },
  {
    id: 6,
    name: "Oreo Dream",
    category: "Shakes",
    price: 18.99,
    img: "https://react-projects-5-menu.netlify.app/images/item-6.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday."
  }
];

const App = () => {
  const [filter, setFilter] = useState("All");
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <Menu menu={menuData} filter={filter} setFilter={setFilter} />
    </div>
  );
};

export default App;
