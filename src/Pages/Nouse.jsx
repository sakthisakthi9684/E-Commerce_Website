
// export const ShopContext = createContext(null);

//     const getDefaultCart = () => {
//         let cart = {}
//         for(let i=0;i<all_product.length+1;i++)
//         {
//             cart[i] =0
//         }
//         return cart
//     }
// const ShopContextProvider =(props) =>{
    
//     const [cartItems,setCartItems] =useState(getDefaultCart())

    
//     const addToCart =(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         console.log(cartItems);
//     }

//     const removeFromCart =(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//         console.log(cartItems);
//     }
    
    
//     const contextValue = {all_product,cartItems,addToCart,removeFromCart}
//     return(
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     )

// }

// export default ShopContextProvider;