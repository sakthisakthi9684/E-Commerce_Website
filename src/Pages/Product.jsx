import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Commponents/Breadcrums/Breadcrum';
import ProductDisplay from '../Commponents/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Commponents/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Commponents/RelatedProducts/RelatedProducts';

function Product() {
  const {all_product}=useContext(ShopContext)
  const{productId} = useParams();
  const product = all_product.find((e)=>e.id===parseInt(productId)); 
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Product