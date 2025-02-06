import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const InitialPage = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        const menuJson = await response.json();
        setMenu(menuJson.categories || []);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
    <h3 className="category">Here are few categories our site contains :- </h3>

    <div className='meals'>
      {menu.length > 1 ? (
        menu.slice(1).map((curItem) => (
          <div className='mealImg' key={curItem.idCategory}>
            <img src={curItem.strCategoryThumb} alt={curItem.strCategory} />
            <p>{curItem.strCategory}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </>
  );
};

export default InitialPage;
