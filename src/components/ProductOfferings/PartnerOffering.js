/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import color from '../../Color'
import { Text17gray06, Text17gray02, Text17gray01 } from '../UI/Text/Text';
import { Text22Black, Text17Black } from '../UI/Text/TextBlack';
import { Text17Green } from '../UI/Text/TextGreen';
import AddOrder from './../UI/AddOrder';

const useStyles = makeStyles(theme => ({
    column: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex : 1,
        height : 180
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent : 'space-between',
        marginTop: 5,
        width : '100%',
        marginBottom : 25,
        height : 180
    },
    partnerOfferings: {
        border: 0,
        borderRadius: 3,
        width: 345,
        alignContent: 'center'
    },
    image: {
        width: '33%',
        height: 150,
        margin: '1% 0% 1% 1%',
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
    marginLeft: {
        display : 'flex',
        flexDirection: 'column',
        marginLeft : 16,
        justifyContent : 'space-between',
        height : 150
    },
    pricerow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    line : {
        height : 1,
        width : "100%",
        background : color.gray00,
    }
}));

/*{
    imageUrl: item.imageUrl,
    offering: item.offering,
    offeringSubText: item.offeringSubText,
    partnerOfferingType: item.partnerOfferingType,
    longDescription: item.longDescription,
    createdAt: item.createdAt,
    cost: item.cost
}*/

const PartnerOffering = (props) => {
    const classes = useStyles();
    return (
        <div key = {props.viewData.key} className={classes.row}>
            <img className={classes.image} src={props.viewData.imageUrl} />
            <div elevation={0} className={classes.column}>
                <div className={classes.marginLeft}>
                    <Text17Black> {props.viewData.offering}</Text17Black>
                    <Text17gray06> {props.viewData.longDescription}</Text17gray06>
                    <Text17gray06> {props.viewData.offeringSubText}</Text17gray06>
                    <div className={classes.pricerow}>
                        <Text17gray06> {props.viewData.cost}</Text17gray06>
                        <Text17Green className={classes.margin5}>ON REQUEST</Text17Green>
                        <AddOrder/>
                    </div>
                </div>
                <div className = {classes.line}></div>
            </div>
        </div>
    );
}

export default PartnerOffering