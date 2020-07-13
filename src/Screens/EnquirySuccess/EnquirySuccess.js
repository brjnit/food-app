/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../Color'
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'qrcode.react'
import { getEnquiriesForCustomer } from '../../redux/actions/UserEnquiryActions';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    header: {
        height: '95',
        paddingTop: 30,
        paddingLeft: "5%",
        paddingBottom: 8,
        fontSize: 22,
        backgroundColor: colors.grayBlueBG,
    },
    conatiner: {
        width: '90%',
        marginTop: 30,
        marginLeft: "5%",
        marginBottom: 30,
    },
    footer: {
        marginBottom: 40,
        marginTop: 30,
        marginRight: 16,
        marginLeft: 16
    },
    button: {
        width: '100%',
        height: 48,
    },
    inputStyle: {
        fontSize: 20,
        width: '100%',
    },
    inputLabel: {
        color: colors.blackText,
    }
});

const EnquirySuccess = (props) => {
    const classes = useStyles();
    const enquiries = useSelector(state => state.enquiry.enquiries); 
    const usrDtls = useSelector(state => state.registration.usrDtls);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEnquiriesForCustomer())
    }, []);
    return (
        <div className={classes.root}>
            {console.log("enquiries",enquiries)}
            {usrDtls.customerId &&  <QRCode
            id={usrDtls.customerId}
            value= {usrDtls.customerId}
            size={290}
            level={"H"}
            includeMargin={true}
            >
            </QRCode>}
           
        </div>
    )
}

export default EnquirySuccess;