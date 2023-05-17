import React from 'react'
import ProductCard from '../Components/ProductCard'
import'./Product.css'
import { PRODDUCTCARDITEM } from '../ProductCardItem'
const Products = () => {
  return (
    <div className='products'>
       <div className="product-card">
        {PRODDUCTCARDITEM.map((item )=>(
                <ProductCard   {...item}/>
        ))}
       
       </div>
      
    </div>
  )
}

export default Products
