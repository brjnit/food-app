/*
Author: Brajesh Kumar
*/

import React, {useState,useEffect} from 'react'
import Response from '../../Common/Response';
import PartnerOffering from './PartnerOffering';

const ProductOfferings = () => {
    const items = Response.PartnerOfferings
    return (
    <div>
        <h3>Product</h3>
        {items.map( item => {
           return  <PartnerOffering 
            id = {item.id}
            offering = {item.offering}
            offeringSubText = {item.offeringSubText}
            imageUrl = {item.imageUrl}
            isActive = {item.isActive}
            cost = {item.cost}
            longDescription = {item.longDescription}
            availability = {item.availability}
            cost = {item.cost}
            />
        })
        }
    </div>
    );
}

export default ProductOfferings