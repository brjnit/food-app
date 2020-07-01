/*
Author: Brajesh Kumar
*/

import React from 'react'
import PartnerOffering from './PartnerOffering';

const Product = ({ partnerOfferingsViewData, productSelectHandler }) => {
  return (
    <div>
      <h7>Products </h7>

      {partnerOfferingsViewData.map(item => {
        
        return <PartnerOffering
          viewData={item}
          productSelectHandler={productSelectHandler}
        />
      })}
    </div>
  );
}

export default Product