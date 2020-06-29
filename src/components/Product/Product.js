/*
Author: Brajesh Kumar
*/

 import React, {useState,useEffect} from 'react'
import APIRequest from '../../network/APIRequest/APIRequest';
import Response from '../../Common/Response';
import ProductOfferings from '../ProductOfferings/ProductOfferings';
// import classes from './Product.css'
// const Product = (props) => (
//     <div className= {classes.Product}>
//         <image />
//         <p>{props.product.name}</p>
//         <p>{props.product.desc}</p>
//         <button>Add</button>
//     </div>
// )

// export default Product

const Product = () =>  {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [items, setItems] = useState([]);
    
    // useEffect(() => {
    //     setItems({items: Response.PartnerOfferings
        
    //     })
    //     console.log("items   ",items)
    // }, [])
  
 
      return (
        <ProductOfferings/>
      );
  }

  export default Product