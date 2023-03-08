import React, { useEffect, useState } from 'react';
import Product from './Product';
import "./RightsideContent.css";


function RightsideContent(props) {
    const [listOfProduct,setListOfProducts] = useState([]);
    useEffect(()=>{
        let list = [
            {name:"iPhone9",price:"38000",rating:"38000",image : "https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417554"},
            {name:"iPhone12",price:"47000",rating:"25000",image:"https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417132"},
         {  name:"iPhone11",price:"51000",rating:"32000",image :"https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417429" },

            {name:"iPhone11 Pro",price:"45000",rating:"41000",image:" https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/81_Zx6troaL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417044"},
            {name:"iPhone12 Pro",price:"51000",rating:"32000",image:"https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/71LRBr1aLNS._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994416504"},
     { name:"iPhone11 mini",price:"51000",rating:"32000",image:"https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/71KVeQql77S._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994416163"}   
    ]
    setListOfProducts(list);
   
    },[]);
    // console.log(listOfProduct?.map((i)=>{console.log(i.name)}),"data1");
    return (
        <div className='right_content'>
        {/* { <Product name="iPhone11" price="51000" rating="32000" image = "https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417429" /> }
        <Product /> 
        <Product />
        <Product />
        <Product />
        <Product/> */}
        {
            listOfProduct.map ((i)=>
                (
                 <Product definition={i}/>
            ))
        }
        </div>
    );
}

export default RightsideContent;