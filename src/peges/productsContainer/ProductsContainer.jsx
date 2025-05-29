 import React from 'react'
 import {catalog} from '../../utils/catalog.js'

 import ProductCard from '../productCard/ProductCard.jsx'
 
 const ProductsContainer = () => {
   return (
 
    
        <section className='container flex flex-wrap mx-auto px-10 justify-center gap-10'>
            {catalog.map((product) =>(
              <ProductCard {...product}/>
            )
            )}
        </section>
       
   )
 }
 
 export default ProductsContainer