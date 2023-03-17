import Link from "next/link"
import style from '../styles/menu.module.css'
import { useAppContext } from "./stateWraper"

const Menu = () => {
  const card=useAppContext()
  const handleOpencart=()=>{
    card.openCart()
  }
  return (
    <nav className={style.menu}>
        <div>
            <ol>
                <li>
                    <Link href='/' className={style.link}>Home</Link>
                </li>
                <li>
                      <Link href='/store' className={style.link}>Store</Link>
                </li>
                <li>
                      <Link href='/faq' className={style.link}>FAQ</Link>
                </li>
            </ol>
        </div>
        <div>
              <Link href="#" className={style.link} onClick={handleOpencart}>Card ({card.getNumberOfteams()})</Link>
        </div>
    </nav>
  )
}

export default Menu