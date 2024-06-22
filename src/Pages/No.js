{/* {all_product.map((e)=>{<><p>{e.id}</p></>})
        } */}
        {/* {all_product.map((e)=>(
            cartItem[e.id]>0?<>
                              <div>
                                <div className="cartitems-format">
                                    <img src={e.image} alt="" className='carticon-product-icon' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                                    <p>{e.new_price*cartItem[e.id]}</p>
                                    <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                                </div>                    
                                <hr />  

                             </div>
                            </>:null
            
        ))} */}










    //     <div>
    //     <div className="cartitem-format">
    //         <img src='' alt='' className='carticon-product-icon' />
    //         <p></p>
    //         <p></p>
    //         <button className='certitems-quantity'></button>
    //         <p></p>
    //         <img src={remove_icon} onClick={()=>{removeFromCart()}} alt=""  />
    //     </div>
    //     <hr />
    // </div>   


// console.log("============")

// const obj={prop:10}
// console.log("obj=======",obj)

// console.log("obj.prop==",obj.prop)
// const arr=[obj]

// console.log("arr=======",arr)
// console.log("arr[0]====",arr[0])

// arr[0].prop=20

// console.log("arr=======",arr)
// console.log("obj.prop==",obj.prop)













const arr=[4,5,6]

arr[1]=[3,2,5]
console.log(arr)


const obj={
    name:"sakthi",age:43
}
obj.name="subash"
obj.age=22
console.log(obj)






const getTotalCartAmount = () =>{
    let totalAmount = 0
    for(const item in cartItems)
    {
        console.log("cartItems=======",cartItems)
        console.log("item---------",item)
        console.log("aa",cartItems)
        

        // if(cartItems[item]>0)
        // {
        //     let itemInfo = all_product.find((product)=>product.id===Number(item))
        //     totalAmount += itemInfo.new_price * cartItems[item]
        // }
        return totalAmount;
        // {
        //     let itemInfo = all_product.find((product)=>product.id===Number(item))
        //     totalAmount += itemInfo.new_price * cartItems[item]
        // }
        // return totalAmount
    }
}






        // for(const item in cartItems)
        // {
        //     // console.log("for enter")
        //     console.log(item)

        //     console.log(cartItems[item])

        //     // console.log(cartItems[item])
        //     // if(cartItems[item]>=1)
        //     // {
        //     //     console.log(cartItems[item])
        //     // }
        //     // else
        //     // {
        //     //     console.log("askthi")
        //     // }
        //     // console.log(cartItems[4])
        //     // if(cartItems[item]>0)
        //     // {
        //     //     console.log("if enter");
        //     //
        //     // }
        //     // console.log(totalAmount)
        //    return totalAmount
        // } 