type HeadlineProps = {
  children: React.ReactNode
}

const Headline = (props: HeadlineProps) => {
  return <h1 className='text-2xl font-semibold my-6'>{props.children}</h1>
}

export default Headline
