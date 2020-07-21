/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../Color'
import { useDispatch, useSelector } from 'react-redux';
import QRCode from 'qrcode.react'
import { getEnquiriesForCustomer } from '../../redux/actions/UserEnquiryActions';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    qrCode: {
        marginTop: 30,
        marginLeft: 'auto',
        justifyContent: 'center',
    },
    label: {
        marginTop: 30,
        marginRight: 16,
        marginLeft: 16
    },
});

const EnquirySuccess = (props) => {
    const classes = useStyles();
    const enquiries = useSelector(state => state.enquiry.enquiries);

    const isLaoding = useSelector(state => state.loading.showLoader);
    if (isLaoding) {
        return (<FullPageLoader/>)
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.qrCode} >
                {enquiries.id && <QRCode

                    id={enquiries.id}
                    value={''+enquiries.id}
                    size={350}
                    level={"H"}
                    includeMargin={true}
                >
                </QRCode>}
                <div className={classes.label}> Please scan your QR code to secuirity gaurd</div>
                <div className={classes.label}> Your unique ID: {enquiries.id}</div>
                
            </div>
        </div>
    )
}

export default EnquirySuccess;