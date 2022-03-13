import clsx from 'clsx'

type TagButtonProps = {
  label: string
  active: boolean
  onClick: (
    item: TagButtonProps['label'],
    e: React.MouseEvent<HTMLButtonElement>
  ) => void
}

const TagButton = (props: TagButtonProps) => {
  const { label, active, onClick } = props
  return (
    <button
      className={clsx(
        'cursor-pointer transition-colors duration-300 px-4 py-3',
        active
          ? 'bg-indigo-600 text-indigo-100 hover:bg-indigo-700 hover:text-indigo-50'
          : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-200 hover:text-indigo-700'
      )}
      onClick={(e) => {
        e.preventDefault()
        onClick(label, e)
      }}
    >
      {label}
    </button>
  )
}

export default TagButton
