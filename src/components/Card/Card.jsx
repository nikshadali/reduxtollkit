import './Card.scss'
import {add} from '../../store/CartSlice'
import { useDispatch } from 'react-redux'

const Card = ({product}) => {
  const dispatch = useDispatch()
   
    const handleAdd = (product) =>{
    dispatch(add(product))
    }
  return (
    <div className='card'>
        <img src={product.image} alit="img" />
        <h2>{product.title}</h2>
        <h4>{product.price}</h4>
        <button onClick={() =>handleAdd(product)}>Add to Card</button>

    </div>
  )
}

export default Card