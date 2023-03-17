import Layout from "@/components/layout"
import Product from "@/components/product"
import { getItemData, getPathsFromIds } from "@/lib/utils"

const ProductPage = ({ productInfo }) => {
  return (
    <Layout>
        <Product item={productInfo.data} showAs='Page'/>
    </Layout>
  )
}
export default ProductPage

export async function getStaticPaths(){
    const paths=await getPathsFromIds()

    return{
        paths:paths,
        fallback:false,
    }
}
export async function getStaticProps({params}){
    const id=params.id;
    const product=await getItemData(id)
    return{
        props:{
            productInfo:product
        }
    }
}