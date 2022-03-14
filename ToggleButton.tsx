type ToggleButtonProps = {
  id: string
  label: string
  onChange: (checked: boolean) => void
}

const ToggleButton = (props: ToggleButtonProps) => {
  const { label, onChange, id } = props
  return (
    <label
      className='relative flex justify-between items-center group p-2 text-xl'
      htmlFor={id}
    >
      {label}
      <input
        id={id}
        type='checkbox'
        className='absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md'
        onChange={(e) => {
          onChange(e.target.checked)
        }}
      />
      <span className='w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-4 after:h-4 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1'></span>
    </label>
  )
}

export default ToggleButton
