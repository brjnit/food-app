/*
Author: Brajesh Kumar
*/

import React, {useState,useEffect} from 'react'
import Response from '../../Common/Response';
import PartnerOffering from './PartnerOffering';

const ProductOfferings = (props) => {
    //const items = Response.PartnerOfferings
    return (
    <div>
        <h3>Product</h3>
        {props.payload.map( item => {
           return  <PartnerOffering 
            payload = {item}
            />
        })
        }
    </div>
    );
}

export default ProductOfferings