import React, { createContext, useCallback, useState } from 'react'
import  all_product from '../Commponents/Asset/all_product'


export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] =useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItems);
       
    }
    const addToCar = () =>{
       let total=0

        // console.log(cartItems);

       return total;
    }
    const totalcart = () =>{
        let total=0;
        for(const i in cartItems)
        {
            if(cartItems[i]>0)
            {
                total +=1
            }
        }
 
         // console.log(cartItems);
 
        return total;
     }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount= useCallback(() => {
        let totalAmount=0
        for(let item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                 totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    })  

 
  
                          
    const contextValue = {getTotalCartAmount,all_product,cartItems,totalcart,addToCart,addToCar,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default React.memo(ShopContextProvider);