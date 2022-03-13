import Navigation from './Navigation'

type HeaderProps = {}

const Header = (props: HeaderProps) => {
  return (
    <header className='bg-indigo-600 w-full'>
      <div className='container mx-auto px-4 py-8 flex items-center justify-between'>
        <div className='text-indigo-100 text-2xl font-semibold'>
          My Recipe Search App
        </div>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
