import React from 'react'

const Nav = () => {
    const navlinks = [
        {'name': 'Home', 'url':'#home'},
        {'name':'About', 'url':'#about'},
        {'name':'Services', 'url':'#services'},
        {'name':'Contact', 'url':'#contact'},
    ]

return (
    <header className='w-full mx-auto z-5 absolute flex flex-1 justify-evenly items-center top-0'>

      <div className='w-1 rounded-3xl flex flex-1 items-center justify-center mx-4'>
        <h1 className='text-red-700 mr-auto font-averia text-4xl'>SPLATTER</h1>
          <nav className='flex items-center justify-center mr-32'>
            {navlinks.map(link => (
                <a href={link.url} key={link.url} className='text-2xl font-annie text-white mx-5'>{link.name}</a>
            ))}
          </nav>
      </div>
    </header>
  )
}

export default Nav
