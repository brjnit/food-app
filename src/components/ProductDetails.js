/*
Author: Brajesh Kumar
*/

import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import Text6 from '../components/UI/Text/Text6';
import { isMobile } from 'react-device-detect';
import { Text22Black } from './UI/Text/TextBlack';
import { Text17Green } from './UI/Text/TextGreen';
import { Text12gray01 } from './UI/Text';

const useStyles = makeStyles({
    column: {
        display: 'flex',
        flexDirection: 'column',
        //background: ' #FFF003 ',

    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        //background: ' #FFF003 ',
    },
    partnerOfferings: {
        //background: ' #FFF009 ',
        border: 0,
        borderRadius: 3,
        width: 345,
        alignContent: 'center'
    },

    image: {
        width: 60,
        height: 60,
        margin: '1% 4% 1% 1%',
    }
});

/*
<ProductDetails
imageUrl = ""
                         name = "Mc D"
                         width ="100%"
                         subHeader= "New Offers"
                         desc = "Discont"
                
/>
*/

const ProductDetails = (props) => {

    const classes = useStyles()

    return (
        <div className={classes.column}>
            <div className={classes.row}>
                <img className={classes.image} src={props.payload.imageUrl} />
                <div className={classes.column}>
                    <Text22Black>{props.payload.name}</Text22Black>
                    <Text12gray01> {props.payload.subHeader}</Text12gray01>
                    <Text12gray01>{props.payload.subHeader}</Text12gray01>
                </div>
            </div>
            <Text12gray01>{props.payload.desc}</Text12gray01>
        </div>)
}

export default ProductDetails;