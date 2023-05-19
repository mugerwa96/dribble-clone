import React from 'react'
import Product from './Product'

const Products = () => {
   const Products=[
    {
        id:1,
        name:'mugerwa',
        image:'https://images.unsplash.com/photo-1601002257790-ebe0966a85ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
        likes:34,
        views:12.5
    },
    {
        id:2,
        name:'derrick',
        image:'https://images.unsplash.com/photo-1601086540476-7d9fa9dd6023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80',
        likes:4,
        views:2.5
    },
    {
        id:3,
        name:'john',
        image:'https://images.unsplash.com/photo-1601086386762-0620518df7f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80',
        likes:41,
        views:1.5
    },
    {
        id:4,
        
        image:'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        likes:1,
        views:1.25
    }
   ]
  return (
    <div>
        {
            Products.length>0?

            <div className='grid grid-cols-2 md:grid-cols-4'>
                {
                    Products.map(({id, name='john doe',image,likes,views})=>
                    <Product name={name} image={image} likes={likes} views={views} id={id}/>
                    )
                }

            </div>
            :
            <div className='p-2'>
                <p className='text-white text-center rounded bg-red-400 p-1'>Loading  please wait......</p>
            </div>
        }
    </div>
  )
}

export default Products
