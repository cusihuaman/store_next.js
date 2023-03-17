import { useAppContext } from "./stateWraper"
import Product from "./product"
import style from '../styles/shopinCart.module.css'

const ShoppingCart = () => {
  const cart = useAppContext()
  const handleCloseCart = () => {
    cart.CloseCart()
  }
  const getTotal=()=>{
    const total=cart.items.reduce((acc,item)=>acc+item.qty*item.price,0)
    return total;
  }
  return (
    <div className={style.shoppingCart} style={{ display: cart.isOpen ? 'block' : 'none' }}>
      <button onClick={handleCloseCart} className={style.close}>Close</button>
      {cart.items.length === 0 ? (
        <div className={style.empty}>Card is enpty</div>
      ) : (
        <>
          <h3>Your items</h3>
          <div>
            {cart.items.map(item => <Product key={item.id} item={item} showAs='ListItem' qty={item.qty} />)}
          </div>
          <div>Total: ${getTotal()}</div>
        </>
      )}
    </div>
  )
}

export default ShoppingCart