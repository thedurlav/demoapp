import { useState } from "react";

const DisplayMultipleData = () => {
    let [products,setProducts] = useState([
        {pname:"Matrix",
        brand:"Boat",
        price:"1500",
        pic:"https://m.media-amazon.com/images/I/41j7ysLXjBL._SX300_SY300_QL70_FMwebp_.jpg"},
        {pname:"Wave Astra",
        brand:"Boat",
        price:"1400",
        pic:"https://prod4-sprcdn-assets.sprinklr.com/200052/7d4f1046-4ecc-4ef4-932b-cd1f22cc0e98-1568065615/Astra_Packaging_1.1-removebg-p.webp"},
        {pname:"Matrix",
        brand:"Boat",
        price:"1500",
        pic:"https://m.media-amazon.com/images/I/41j7ysLXjBL._SX300_SY300_QL70_FMwebp_.jpg"},
        {pname:"Wave Astra",
        brand:"Boat",
        price:"1400",
        pic:"https://prod4-sprcdn-assets.sprinklr.com/200052/7d4f1046-4ecc-4ef4-932b-cd1f22cc0e98-1568065615/Astra_Packaging_1.1-removebg-p.webp"},{pname:"Matrix",
        brand:"Boat",
        price:"1500",
        pic:"https://m.media-amazon.com/images/I/41j7ysLXjBL._SX300_SY300_QL70_FMwebp_.jpg"},
        {pname:"Wave Astra",
        brand:"Boat",
        price:"1400",
        pic:"https://prod4-sprcdn-assets.sprinklr.com/200052/7d4f1046-4ecc-4ef4-932b-cd1f22cc0e98-1568065615/Astra_Packaging_1.1-removebg-p.webp"},{pname:"Matrix",
        brand:"Boat",
        price:"1500",
        pic:"https://m.media-amazon.com/images/I/41j7ysLXjBL._SX300_SY300_QL70_FMwebp_.jpg"},
        {pname:"Wave Astra",
        brand:"Boat",
        price:"1400",
        pic:"https://prod4-sprcdn-assets.sprinklr.com/200052/7d4f1046-4ecc-4ef4-932b-cd1f22cc0e98-1568065615/Astra_Packaging_1.1-removebg-p.webp"}
    ])
    return (
        <div className="container">
            {
               products.map((p,i,a)=>{
                return(
                    <div className="product">
                        <img  src={p.pic} alt=""></img>
                        <h1>{p.pname}</h1>
                        <h2>{p.brand} , MRP - {p.price}</h2>
                    </div>
                )
               })
            }
        </div>
      );
}
 
export default DisplayMultipleData;