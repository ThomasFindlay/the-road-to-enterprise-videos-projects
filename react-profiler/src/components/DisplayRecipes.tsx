import { Recipe } from '../types/recipes'
import SearchRecipes from './SearchRecipes'

type DisplayRecipesProps = {
  recipes: Recipe[]
}

const trimWithEllipsis = (str: string, limit: number) => {
  if (str.length < limit) return str

  return str
    .slice(0, limit)
    .trimEnd()
    .padEnd(limit + 3, '.')
}

const convertCookingTimeToHours = (timeStr: string) => {
  const totalMinutes = parseInt(timeStr)
  if (totalMinutes < 60) return `${totalMinutes} minutes`
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours} hours ${minutes} minutes`
}

const DisplayRecipes = (props: DisplayRecipesProps) => {
  const { recipes } = props

  return (
    <ul className='overflow-auto h-[500px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
      {recipes.map((recipe) => {
        return (
          <li
            key={recipe.id}
            className='flex flex-col space-y-4 p-4 shadow border border-gray-100 col-span-1 max-h-64'
          >
            <div className='flex flex-col space-y-4 flex-grow'>
              <span className='font-semibold'>{recipe.name}</span>
              <span className='overflow-hidden text-ellipsis'>
                {trimWithEllipsis(recipe.description, 100)}
              </span>
            </div>

            <div className='flex items-center justify-between'>
              <div></div>
              <div className='text-gray-500'>
                {convertCookingTimeToHours(recipe.minutes)}
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default DisplayRecipes
