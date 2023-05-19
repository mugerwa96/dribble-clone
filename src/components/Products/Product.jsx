import React from 'react'

const Product = ({ name, image, likes, views }) => {
    const Capitalize=(name)=>{
       return name.charAt(0).toUpperCase()+ name.slice(1)
       
    }
    return (
        <div className='p-3'>
            {/* product__card */}

            <div className=' rounded overflow-hidden shadow-md bg-white'>
                <img src={image} alt="" className='h-[6rem] md:h-[10rem] w-full object-cover rounded-t' />

                {/* flex__container */}
                <div className=' flex items-center justify-between'>
                    {/* left__side */}
                    <div className='flex items-center space-x-2 py-2  px-1'>
                        <p className='text-xs'>
                            
                            {name.length < 8 ?
                               Capitalize(name) :
                               Capitalize (name.substring(0, 5) + `...`)
                            }
                        </p>
                        <button className='p-1 text-xs bg-gray-300 text-whte rounded'>Team</button>
                    </div>
                    {/* right__side */}
                    <div className='flex items-center space-x-2 '>

                        {/* likes */}
                        <div className='flex items-center'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>

                            </span>
                            <span className='text-xs'>{likes}</span>
                        </div>

                        {/*views */}
                        <div className='flex items-center '>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">

                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>


                            </span>
                            <span className='text-xs'>{views}k</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product
