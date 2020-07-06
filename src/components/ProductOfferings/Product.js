/*
Author: Brajesh Kumar
*/

import React from 'react'
import PartnerOffering from './PartnerOffering';
import { Text22Black } from '../UI/Text/TextBlack';

const Product = ({ partnerOfferingsViewData, prodctAddDeleteHandler }) => {
  return (
    <div>
      <Text22Black>Products</Text22Black>
      {(partnerOfferingsViewData !== undefined) && partnerOfferingsViewData.map(item => {
        return <PartnerOffering
          key={item.id}
          viewData={item}
          productSelectHandler={prodctAddDeleteHandler}
        />
      })}
    </div>
  );
}

export default Product