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
import { Text12gray01, Text17gray02, Text17gray00 } from '../UI/Text';
import { Text22Black } from '../UI/Text/TextBlack';
import { Text17Green } from '../UI/Text/TextGreen';
import { ButtonBlue } from '../UI/Button';

const useStyles = makeStyles(theme => ({
    root: {
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    },

    column: {
        display: 'flex',
        flexDirection: 'column',
        
        
    },

    row: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    partnerOfferings: {
        //background: ' #FFF009 ',
        border: 0,
        borderRadius: 3,
        width: 345,
        alignContent: 'center'
    },

    image: {
        width: 150,
        height: 150,
        margin: '1% 4% 1% 1%' ,
        borderRadius: 12,
        elevation: 2
    },

   
    verticalText: {
        marginLeft: 5,
        marginTop: 5
    },
    title: {

    },
    activeText: {
      
    },

    buttonAdd: {
        justifyContent: 'right',
        height: 48,
        backgroundColor: 'blue',
    },

    fontgrey: {
        fontSize: 16,
        color: color.gray01
    },

    top: {
        marginTop: 4
    },

    top10: {
        marginTop: 10
    },

    margin5: {
        marginLeft: 16
    },

    pricerow: {

    }









}));

const PartnerOffering = (props) => {
    const classes = useStyles();

    const onPressAdd = () =>{
        props.productSelectHandler(10)
    }
    return (

        <Paper>
            <div className={classes.row}>
                <img className = {classes.image}  src={props.payload.imageUrl}/>
               
                <Paper elevation={0} className={classes.column}>
                    <Text22Black>{props.payload.name}</Text22Black>
                    <div className = {classes.top}> <Text12gray01> {props.payload.desc}</Text12gray01></div>
                    <div className = {classes.top10}> <Text12gray01> {props.longDescription}</Text12gray01></div>
                    <div className={classes.row}>
                        <Text17gray00> {props.payload.price}</Text17gray00>
                        <Text17Green className={classes.margin5}>ON REQUEST</Text17Green>
                        <ButtonBlue className={classes.margin5} onClick= {onPressAdd}> Add</ButtonBlue>
                    </div>
                </Paper>
            </div>
        </Paper>
    );
}

export default PartnerOffering