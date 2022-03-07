import { Recipe } from '../types/recipes'

type DisplayRecipesProps = {
  recipes: Recipe[]
}

const DisplayRecipes = (props: DisplayRecipesProps) => {
  const { recipes } = props
  return (
    <ul className='overflow-auto h-[500px]'>
      {recipes.map((recipe) => {
        return <li key={recipe.id}>{recipe.name}</li>
      })}
    </ul>
  )
}

export default DisplayRecipes
