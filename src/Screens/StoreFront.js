/*
Author: Brajesh Kumar
*/

import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core';
import Text6 from '../components/UI/Text/Text6';
import {isMobile} from 'react-device-detect';

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
    
    const classes = useStyles()
    
    return (
    <div className={classes.root}>
        <div className={classes.start}>
            <Text6>Hello world</Text6>
            <Text6>Hello world</Text6>
            <Text6>Hello world</Text6>
            <Text6>Hello world</Text6>
            <div className={classes.profile}>
                <img className={classes.image} src="https://captainamericadiag618.blob.core.windows.net/uploaded-files/partnerCoverPhoto_15439_1583485492.jpg" />
                <div className={classes.start}>
                    <Text6>Hello world</Text6>
                    <Text6>Hello world</Text6>
                    <Text6>Hello world</Text6>
                </div>

            </div>
            <Text6>Hello world</Text6>

        </div>
    </div>)
}

export default StoreFront;