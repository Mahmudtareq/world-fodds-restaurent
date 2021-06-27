import React from 'react';
import { Link } from 'react-router-dom';

const MealResult = ({ meal }) => {
  return (
    <div>
      <Link to={`recipe/${meal.idMeal}`}>
        <div className="rounded shadow-lg m-1">
          <img
            className="rounded-t-lg"
            src={meal.strMealThumb}
            alt="Meal"
            loading="lazy"
          />
          <div className="meal-information px-2 py-4">
            <div className="text-sm truncate">{meal.strMeal}</div>
            <p className="text-gray-700 truncate overflow-clip overflow-hidden h-2/4 text-base">
              {meal.strArea}
            </p>
            <p className="text-gray-700 truncate overflow-clip overflow-hidden h-2/4 text-base">
              {meal.strCategory}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MealResult;