import React, { useEffect, useState } from 'react'
import { Recipe } from '../types/recipes'
import DisplayRecipes from './DisplayRecipes'
import Headline from './Headline'
import Input from './Input'
import IngredientsFilter from './IngredientsFilter'
import { ingredients } from './ingredients'

type SearchRecipesProps = {}

const SearchRecipes = (props: SearchRecipesProps) => {
  const [query, setQuery] = useState('')
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [activeIngredients, setActiveIngredients] = useState<
    Record<string, boolean>
  >({})
  const [quickRecipesOnly, setQuickRecipesOnly] = useState(false)

  const onChangeActiveIngredient = (label: string) => {
    let value = false
    if (!activeIngredients[label]) {
      value = true
    }
    setActiveIngredients({
      ...activeIngredients,
      [label]: value,
    })
  }

  useEffect(() => {
    ;(async () => {
      const data = await fetch('/data/recipes.json').then((res) => res.json())
      console.log('data', data)

      setRecipes(data.slice(0, 2000))
    })()
  }, [])
  const queryLower = query.toLowerCase()

  const activeIngredientsList = Object.entries(activeIngredients).reduce(
    (acc: string[], [ingredient, isSelected]) => {
      if (isSelected) acc.push(ingredient.toLowerCase())
      return acc
    },
    []
  )

  const filteredRecipes = recipes.filter((recipe) => {
    // Filter out recipes that take longer than an hour
    if (quickRecipesOnly && parseInt(recipe.minutes) > 60) return false
    // Filter out any recipes not matching the query
    if (!recipe.name.toLowerCase().includes(queryLower)) return false

    // Include only recipes that have the selected ingredients
    if (activeIngredientsList.length) {
      return activeIngredientsList.every((ingredient) =>
        recipe.ingredients.includes(ingredient)
      )
    }

    return true
  })

  const clearIngredients = () => {
    setActiveIngredients({})
  }

  return (
    <div className='container mx-auto p-4'>
      <Headline>Search Recipes</Headline>

      <form className='space-y-6'>
        <Input
          id='search-recipes-input'
          label='Recipe name'
          type='text'
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
        />

        <label className='space-x-3 block'>
          <input
            id='quickRecipesOnly'
            type='checkbox'
            onChange={(e) => setQuickRecipesOnly((val) => !val)}
          />
          <span>Quick Recipes Only ({'< 60 minutes'})</span>
        </label>

        <IngredientsFilter
          ingredients={ingredients}
          activeIngredients={activeIngredients}
          onChangeActiveIngredient={onChangeActiveIngredient}
          clearIngredients={clearIngredients}
        />

        <DisplayRecipes recipes={filteredRecipes} />
      </form>
    </div>
  )
}

export default SearchRecipes
