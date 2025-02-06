import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Mealcards = ({ detail }) => {
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    if (detail !== undefined) {
      setIsFetched(true);
    }
  }, [detail]);

  if (isFetched && (!detail || !Array.isArray(detail))) {
    return <p className='msg'>Data Not Found</p>;
  }

  return (
    <div className='meals'>
      {detail && detail.length > 0 ? (
        detail.map((curItem) => (
          <div className='mealImg' key={curItem.idMeal}>
            <img src={curItem.strMealThumb} alt={curItem.strMeal} />
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}>
              <button>Recipe</button>
            </NavLink>
          </div>
        ))
      ) : null}
    </div>
  );
};

export default Mealcards;