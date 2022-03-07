type InputProps = {
  id: string
  label?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = (props: InputProps) => {
  const { label, id, ...inputProps } = props
  return (
    <div className='flex flex-col space-y-2'>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        id={id}
        className='px-4 py-3 shadow border border-gray-100 outline-none focus:ring ring-indigo-400'
        {...inputProps}
      />
    </div>
  )
}

export default Input
