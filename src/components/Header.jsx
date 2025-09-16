import React from 'react'

export default function Header({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="header">
      <h1>🍳 Meal Explorer</h1>
      <p>Discover delicious recipes from around the world</p>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <optgroup label="Select a category"></optgroup>
        {categories.map(cat => (
          <option key={cat.idCategory} value={cat.strCategory}>
            {cat.strCategory}
          </option>
        ))}
      </select>
    </div>
  )
}
