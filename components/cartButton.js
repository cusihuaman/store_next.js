import style from '../styles/cartButton.module.css'
import { useAppContext } from './stateWraper'
const CartButton = ({item}) => {
  const cart=useAppContext()
  const handleClick=()=>{
    cart.addItemToCart(item)
    cart.openCart()
  }
  return (
    <button className={style.button} onClick={handleClick}>Add to cart</button>
  )
}

export default CartButton