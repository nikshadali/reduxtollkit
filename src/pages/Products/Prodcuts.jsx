import React from 'react'
import useFetch from '../../hook/useFetch'
import Card from '../../components/Card/Card';
import './Prodcuts.scss'


const Prodcuts = () => {
    const {products, loading, error} = useFetch(`/products`)
    
  return (
    <div className='products'>
        {
            products.map(product => (
                <Card product={product} />
            ))
        }
    
    </div>
  )
}

export default Prodcuts