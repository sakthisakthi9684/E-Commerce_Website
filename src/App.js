// E-COM  Start  //
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import men_banner from './Commponents/Asset/banner_mens.png'
import women_banner from './Commponents/Asset/banner_women.png'
import kid_banner from './Commponents/Asset/banner_kids.png'
import  Navbar from './Commponents/Navbar/Navbar'
import Shop from './Pages/Shop'
function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>    
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App
// E-com  End   //

// import logo from './img/juice1.jpg';
// // import './App.css'; 
// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useRef, useState } from "react";
// function App() {
//   const[input,setInput]=useState(0) 
//   const ref=useRef()
//   const ref1=useRef()
//   function changeText(e){
//     console.log(e.target.value)
//     setInput(e.target.value )
//   }
//   useEffect(()=>{
//     console.log("hello")
//     ref1.current.focus()
//     ref.current.style.backgroundColor="pink"
//   },[input]) 
//   const navigate=useNavigate()
//   function validateAndGo()
//   {
//     if(input===3)
//     {  
//       navigate(`/about/5`)
//     }
//     else{
//     alert(input+"is click")  
//     }
//   }
//   return (
//     <div className="App">
//       <p>{input}</p> 
//       <input onChange={(e)=>{changeText(e)}} />
//       <input ref={ref1}/>
//       <input ref={ref}/>
//       <img src={logo}/>
//       {/* <button onClick={()=>setInput(input+1)}>+++</button> */}
//       <Link to={"/about"}>go to about</Link>
//       <button onClick={()=>validateAndGo()}>navigate</button>
//     </div>
//   );
// }
// export default App;