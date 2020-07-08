import React from 'react'
import colors from '../Color'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid } from '@material-ui/core';
import CountryCode from './CountryCode';

const useStyles = makeStyles((theme) => ({
    inputStyle: {
        fontSize: 20,
        width: '100%',
    },
    titleText: {
        //textAlign: 'center',
        marginTop: '5%',
        marginLeft: '9%',
    },
    linkStyle: {
        marginBottom: '8%',
        marginLeft: '8%'
    },
    countryCode: {
        marginTop: 10

    }
}));

const PhoneInput = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} spacing={12}>
                <div className={classes.titleText} >{ "Verify your phone number"}</div>
            </Grid>
            <Grid className={classes.countryCode}  item xs={1} spacing={1}>
                <CountryCode />
            </Grid>
            <Grid item xs={11} spacing={12}>
                <TextField className={classes.inputStyle} id="phone-number" label={props.placeholder} keyboardType = 'numeric' maxLength = {10} {...props}/>
            </Grid>
            <Grid item xs={12}>
                <a className={classes.linkStyle} href={'https://dailyget.in/legal'} target="_blank"  >Terms and conditions and Privacy policy </a>
            </Grid>
        </Grid>
    )
}


export default PhoneInput