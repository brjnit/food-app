/*
Author: Brajesh Kumar
*/

import React from 'react'
import PartnerOffering from './PartnerOffering';
import { Text22Black } from '../UI/Text/TextBlack';

const Product = ({ partnerOfferingsViewData, productSelectHandler }) => {
  return (
    <div>
      <Text22Black>Products</Text22Black>
      {(partnerOfferingsViewData !== undefined) && partnerOfferingsViewData.map(item => {
        return <PartnerOffering
          key={item.id}
          viewData={item}
          productSelectHandler={productSelectHandler}
        />
      })}
    </div>
  );
}

export default Product