import { getItems } from "@/services/itemService";

export async function getPathsFromIds(){
    const items=await getItems()

    const ids=items.map(item=>{
        return{
            params:{
                id: converToPath(item.title)
            }
        }
    })
    return ids
}
export async function getItemData(id){
    const items=await getItems()
    const product = items.find((item) => converToPath(item.title)=== id)

    return{
        id: id,
        data: product
    }
}
export function converToPath(title){
    return title.toLowerCase().replace(/\s/g,"-")
}