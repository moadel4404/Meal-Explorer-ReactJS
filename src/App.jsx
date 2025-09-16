import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import MealsContainer from './components/MealsContainer.jsx'

export default function App() {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [meals, setMeals] = useState([])

  // fetch categories
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => {
        setCategories(data.categories)
        if (data.categories.length > 0) {
          setSelectedCategory(data.categories[0].strCategory)
        }
      })
  }, [])

  // fetch meals when category changes
  useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
  }, [selectedCategory])

  return (
    <div className="main-container">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <MealsContainer meals={meals} />
    </div>
  )
}
