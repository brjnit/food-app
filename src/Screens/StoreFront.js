/*
Author: Brajesh Kumar
*/

import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import {isMobile} from 'react-device-detect';
import { useDispatch, useSelector } from 'react-redux'
import { getPartnerOfferings, getPartnerDetails } from '../redux/actions/StoreActions';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: ' #FFFFF0 ',
        border: 0,
        borderRadius: 3,
        width: '100%',
        alignItems: 'center',

    },

    start: {
        display: 'flex',
        flexDirection: 'column',
        background: ' #FF0F00 ',
        border: 0,
        borderRadius: 3,
        width: isMobile ? "100%" : "40%" ,
        alignItems: 'start',

    },

    profile: {
        display: 'flex',
        flexDirection: 'row',
        background: ' #FFF003 ',
        border: 0,
        borderRadius: 3,
        width: 345,
        justifyContent: 'center',
        alignContent: 'center'
    },
    partnerOfferings: {
        background: ' #FFF009 ',
        border: 0,
        borderRadius: 3,
        width: 345,
        alignContent: 'center'
    },

    image: {
        width: 60,
        height: 60
    }
});

const StoreFront = (props) => {
  const partnerDetails = useSelector(state => state.landing.partnerDetails);
  const partnerOfferings = useSelector(state => state.landing.offerings);
  const dispatch = useDispatch();
    const classes = useStyles()
    useEffect(() => {
        dispatch(getPartnerDetails());
        dispatch(getPartnerOfferings())
    }, []
    );

    return (
    <div className={classes.root}>
        {console.log("#details #  ", partnerDetails, partnerOfferings)
        
        }
    </div>)
}

export default StoreFront;
