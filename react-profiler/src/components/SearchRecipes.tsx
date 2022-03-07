import React, { useEffect, useState } from 'react'
import { Recipe } from '../types/recipes'
import DisplayRecipes from './DisplayRecipes'
import Headline from './Headline'
import Input from './Input'

type SearchRecipesProps = {}
const SearchRecipes = (props: SearchRecipesProps) => {
  const [query, setQuery] = useState('')
  // const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await fetch('/data/recipes.json').then((res) => res.json())
      console.log('data', data)
      setRecipes(data.slice(0, 1000))
    })()
  }, [])
  const queryLower = query.toLowerCase()
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(queryLower)
  )

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

        <DisplayRecipes recipes={filteredRecipes} />
      </form>
    </div>
  )
}

export default SearchRecipes
