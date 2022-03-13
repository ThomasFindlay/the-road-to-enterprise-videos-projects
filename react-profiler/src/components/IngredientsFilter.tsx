import { memo } from 'react'
import TagButton from './TagButton'
type IngredientsFilterProps = {
  ingredients: string[]
  activeIngredients: Record<string, boolean>
  onChangeActiveIngredient: (
    ingredient: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void
  clearIngredients: () => void
}

const IngredientsFilter = (props: IngredientsFilterProps) => {
  const {
    ingredients,
    activeIngredients,
    onChangeActiveIngredient,
    clearIngredients,
  } = props
  return (
    <div>
      <div className='space-y-3'>
        <label>Must contain:</label>
        <ul className='flex flex-wrap gap-2'>
          {ingredients.map((ingredient) => {
            return (
              <li key={ingredient}>
                <TagButton
                  active={activeIngredients[ingredient]}
                  label={ingredient}
                  onClick={onChangeActiveIngredient}
                />
              </li>
            )
          })}
        </ul>
        <button
          type='button'
          onClick={(e) => {
            e.preventDefault()
            clearIngredients()
          }}
        >
          Clear Ingredients
        </button>
      </div>
    </div>
  )
}

export default IngredientsFilter
