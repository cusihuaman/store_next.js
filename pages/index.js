import Layout from '@/components/layout'
import { getLatestItems } from '@/services/itemService'
import Product from '@/components/product'
import style from '../styles/Home.module.css'
import styleProduct from '../styles/product.module.css'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({items}) {
  return (
    <Layout title='Bienvenido'>
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop the Summer 2023 Collections</h2>
            <p>La imaginación es un proceso creativo superior que permite al individuo manipular información 
              generada intrínsecamente con el fin de crear una representación percibida por los sentidos. 
              Esta representación significa que la información 
              se ha formado dentro del organismo en ausencia de estímulos del ambiente</p>
          </div>
        </div>
      </div>
        <h4>Estas en la tienda</h4>
        <div className={styleProduct.items}>
          {
            items && items.map((item)=>(
              <Product key={item.idlim} item={item} showAs='item'/>
            ))
          }
        </div>

    </Layout>
  )
}
export async function getStaticProps(){
  const res=await getLatestItems()
  return{
    props:{
      items:res
    }
  }
}
