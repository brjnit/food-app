import React from 'react'
import colors from '../Color'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import CountryCode from './CountryCode';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputStyle: {
        fontSize: 20,
        width: '100%',
    },
    titleText: {
        //textAlign: 'center',
        marginTop: '5%',
        marginLeft: '6%',
    },
    linkStyle: {
        marginLeft: '6%',
        marginTop: 20,
    },
}));

const PhoneInput = (props) => {
    const classes = useStyles();

    return (
        <div >

            <div className={classes.titleText} >{"Verify your phone number"}</div>
            <div className={classes.root}>
                <CountryCode />
                <TextField className={classes.inputStyle}
                    id="phone-number"
                    label={props.placeholder}
                    keyboardType='numeric'
                    inputProps={{ maxLength: 10 }} {...props} />
            </div>
            <div className={classes.linkStyle}>
                <a href={'https://dailyget.in/legal'} target="_blank"  >Terms and conditions and Privacy policy </a>
            </div>
        </div>
    )
}


export default PhoneInput