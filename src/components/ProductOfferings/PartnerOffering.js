/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import Response from '../../Common/Response';
import Box from '@material-ui/core/Box'
import Text1 from '../UI/Text/Text1';
import ImageAvatars from '../UI/ImageAvatars';
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomImage from '../UI/CustomImage';
import color from '../../Color'
import Text4 from '../UI/Text/Text4';
import Text6 from '../UI/Text/Text6';
import CustomButton from '../UI/CustomButton';

const useStyles = makeStyles(theme => ({
    root: {
        width: 345,
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    },

    horizontal: {
        display: "flex",
        flexDirection: "row",
        flexBasis: "a",
        flexFlow: ""
    },

    horizontalText: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5
    },
    vertical: {
        display: "flex",
        flexDirection: "column",
        flexBasis: "auto",
        flexWrap: "wrap",
        flexShrink: "0",
    },

    verticalText: {
        marginLeft: 20,
        marginTop: 5
    },
    title: {

    },
    activeText: {
      
    }



}));

const PartnerOffering = (props) => {
    const classes = useStyles();
    return (

        <Paper>
            <div className="partner-row">
                <CustomImage width='100' height='100' src={props.imageUrl}> </CustomImage>
                <Paper elevation={0} className={classes.verticalText}>
                    <Text1>{props.id}</Text1>
                    <Text6>{props.offering}</Text6>
                    <Text4>{props.partnerOfferingType}</Text4>
                    <Text6>{props.longDescription}</Text6>
                    <div className={classes.horizontal}>
                        <div className={classes.horizontalText}>Rs 200 </div>
                        <div className={classes.horizontalText}> <Text6 color= {color.textGreen}>ON REQUEST</Text6> </div>
                        <CustomButton className={classes.horizontalText} variant="contained" background= {color.blue02} label= 'ADD' textColor = {color.white}/>
                    </div>
                </Paper>
            </div>
        </Paper>
    );
}

export default PartnerOffering