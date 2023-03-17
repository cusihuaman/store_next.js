import Link from "next/link"
import Image from "next/image"
import style from '../styles/product.module.css'
import { converToPath } from "@/lib/utils"
import CartButton from "./cartButton"

const Product = ({item,showAs,qty}) => {
    if(showAs==='Page'){
        return <div className={style.page}>
            <div>
                <Image src={item.image}
                    alt={item.description}
                    width={400}
                    height={400}
                    placeholder='empty'
                />
            </div>
            <div className={style.info}>
                <div>
                    <h2>{item.title}</h2>
                </div>
                <div className={style.price}>${item.price}</div>
                <div>{item.description}</div>
                <div><CartButton item={item}/></div>
            </div>
        </div>
    }
    if(showAs==='ListItem'){
        return <div className={style.listItem}>
            <div>
                <Image src={item.image}
                    alt={item.description}
                    width={100}
                    height={100}
                />
            </div>
            <div>
                <h4>{item.title}</h4>
                <div>{item.price}</div>
                {qty === 0 ? '' : <div>{qty}Units</div>}
                {qty === 0 ? '' : <div>SubTotal: ${qty * item.price}</div> }
            </div>
        </div>
    }
  return (
    <div className={style.item}>
          <div className={style.itemImage}>
            <Link href={`/store/${converToPath(item.title)}`}>
            <Image src={item.image}
              alt={item.description}
              width={300} 
              height={300}
            />
            </Link>
        </div>
        <div>
            <h3>
                  <Link href={`/store/url-a-mi-componente`}>
                    {item.title}
                  </Link>
            </h3>
        </div>
        <div>${item.price}</div>
        <div><CartButton item={item}/></div>
    </div>
  )
}

export default Product