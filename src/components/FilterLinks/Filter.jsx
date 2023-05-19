import React from 'react'
import NavLink from '../NavBar/NavLink'

const Filter = () => {
     const NavLinks = [
        {
            id: 1,
            name: 'All',

        },
        {
            id: 2,
            name: 'Animation'
        },
        {
            id: 3,
            name: 'Branding'
        },
        {
            id: 4,
            name: 'illustration'
        },
        {
            id: 5,
            name: 'Mobile'
        },
        {
            id: 6,
            name: 'Print'
        },
        {
            id: 7,
            name: 'Product Design'
        
        },
        {
            id: 8,
            name: 'Typography'
        
        },
        {
            id: 9,
            name: 'Web Design'
        }

    ]
  return (
    <div >
        {/* flex__container */}
        <div className='flex items-center justify-between p-2'>
            {/* left__side */}
            <div>
                 <button className='btn-secondary text-xs'>Popular</button>
            </div>
            {/* middle__side */}
            <div className='hidden md:block'>
                <ul className='flex items-center space-x-3'>

                {NavLinks.map(({id,name})=>
                <li>

                    <NavLink name={name} key={id}/>
                </li>
                )}
                </ul>
            </div>
            {/* right__side */}
            <div>
            <button className='btn-secondary text-xs'>Filter options</button>
            </div>
        </div>
    
    </div>
  )
}

export default Filter
