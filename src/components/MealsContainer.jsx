import React from 'react'
import MealCard from './MealCard.jsx'

export default function MealsContainer({ meals }) {
  return (
    <div className="meals-container">
      {meals && meals.map(meal => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  )
}
