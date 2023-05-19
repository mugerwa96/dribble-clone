import React from 'react'
import backgroundIMage from '../../images/2.jpg';
const Main = () => {

  return (
    <div className=' h-[50vh] md:h-[60vh] w-screen bg-cover bg-no-repeat ' style={{ backgroundImage:`url(${backgroundIMage})` }}>
    
      <div className='p-4 absolute text-white max-w-[90%] space-y-4 md:w-[50%] md:mt-[6rem] md:left-[10%]'>
        <h1 className='font-bold text-2xl md:text-5xl'>Discover the world's top  designers & creatives</h1>
        <p className='text-sm md:text-base'>Dribble is the leading destination to find & showcase creative work and home to the world's best deisgn professionals</p>
        <button className='btn-primary'>Sign up</button>
      </div>

    </div>
  )
}

export default Main
