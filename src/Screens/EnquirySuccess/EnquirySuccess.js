/*
Author: Brajesh Kumar
*/

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../Color'
import { useDispatch } from 'react-redux';
import QRCode from 'qrcode.react'
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
    
    const [name, setName] = useState('')
    
    return (
        <div className={classes.root}>
            <QRCode
            id="123456"
            value="123456"
            size={290}
            level={"H"}
            includeMargin={true}
            >

            </QRCode>
        </div>
    )
}

export default EnquirySuccess;