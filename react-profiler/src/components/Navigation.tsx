type NavigationProps = {}

const navItems = ['Home', 'Search', 'Profile', 'Settings']

const Navigation = (props: NavigationProps) => {
  return (
    <nav>
      <ul className='flex space-x-4 text-indigo-100'>
        {navItems.map((item) => {
          return (
            <li key={item}>
              <a className='hover:text-indigo-200 cursor-pointer transition-colors duration-300'>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
