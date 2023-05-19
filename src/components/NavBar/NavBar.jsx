import React, { useState } from 'react'
import NavLink from './NavLink'

const NavBar = () => {
    const NavLinks = [
        {
            id: 1,
            name: 'inspiration',

        },
        {
            id: 2,
            name: 'Find Work'
        },
        {
            id: 3,
            name: 'Learn Design'
        },
        {
            id: 4,
            name: 'Go Pro'
        },
        {
            id: 5,
            name: 'Market Place'
        },
        {
            id: 6,
            name: 'Hire Designers'
        }

    ]

    const [mobileMenu,setMobileMenu]=useState(false);
    return (
        <div className='bg-white z-10 shadow fixed top-0 w-full'>
            {/* flex__container */}
            <div className='flex items-center justify-between p-3 md:max-w-[70rem] md:mx-auto md:p-0'>
                {/* left__side */}
                <div>
                    <h1 className='font-bold text-2xl'>dribble</h1>
                </div>
                {/* right__side */}
                <div className='md:hidden'>
                    <span onClick={()=>setMobileMenu(!mobileMenu)}>

                       
                       {
                        mobileMenu?
                        <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                      </svg>
                      </div>
                        :
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" /> </svg>
                        </div>
                       }

                    </span>
                </div>

                {/* menu_desktop */}
                <div className='hidden md:flex space-x-4'>
                <ul className='flex space-x-3 items-center justify-between'>
                    {NavLinks.map(({ name, id }) => <NavLink name={name} key={id} />)}
                </ul>

                <div className='flex space-x-2 items-center'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                    </span>
                    <span className='nav-link my-2'>Sign in / Sign up</span>

                </div>

                <div className='btn-primary my-3 '>
                    Start a Free Project
                </div>
                </div>

            </div>
            {/* mobile__menu */}

            {
                mobileMenu &&  <div className='p-4 '>
                <ul>
                    {NavLinks.map(({ name, id }) => <NavLink name={name} key={id} />)}
                </ul>
             

                <div className='flex space-x-2 items-center'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                    </svg>
                    </span>
                    <span className='nav-link my-2'>Sign in / Sign up</span>

                </div>
               
                <div className='btn-primary my-3 '>
                    Start a Free Project
                </div>
            </div>
            }
           
        </div>
    )
}

export default NavBar
