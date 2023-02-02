import React from 'react'
import { useAppSelector } from '../store/store';
import ProductItem from './ProductItem';


const ProductList = () => {
const products = useAppSelector(state => state.product.products)

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
        {products.map((item, index)=> <ProductItem key={index} item={item}/>)}
    </div>
  )
}

export default ProductList