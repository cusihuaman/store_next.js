import {createContext,useContext,useState} from 'react'
const AppContext=createContext({
    isOpen:false,
    items:[],
    openCart:()=>{},
    addItemToCart:(item)=>{},
    CloseCart:()=>{},
    getNumberOfteams:()=>{},
})

const StateWraper = ({children}) => {
    const [isOpen, setIsOpen]=useState(false)
    const [items, setItems]=useState([])
    const handleOpenCart=()=>{
        setIsOpen(true)
    }
    const handleCloseCart=()=>{
        setIsOpen(false)
    }
    const handleAddtoItemCart=(item)=>{
        const temp=[...items]
        const found=temp.find(product=>product.id===item.id)

        if(found){
            found.qty++
        }
        else{
            item.qty=1
            temp.push(item)
        }
        setItems([...temp])
    }
    const handleNumeberItems=()=>{
        const total=items.reduce((acc,item)=>acc+item.qty,0)
        return total;
    }
  return (
    <AppContext.Provider value={{
        isOpen,
        items,
        openCart:handleOpenCart,
        CloseCart:handleCloseCart,
        addItemToCart:handleAddtoItemCart,
        getNumberOfteams:handleNumeberItems
    }}>
        {children}
    </AppContext.Provider>
  )
}

export default StateWraper;
export function useAppContext(){
    return useContext(AppContext)
}