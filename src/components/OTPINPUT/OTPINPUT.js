
/*
Author: Brajesh Kumar
*/

import React from 'react'
import { InputLabel, Input, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import style from "./OTPInput.css";
import colors from '../../Color'


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(3),
            width: '70%',
            marginLeft: 20
        },
        conatainer: {
           marginTop:10,          
        },
        inputStyle: {
            marginLeft: 60,
            fontSize: 20,
            width: '40%',
        },
        inputLabel: {
            color: colors.blackText,
        }

    },
}));
const OTPINPUT = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root} >
              <InputLabel className={classes.inputLabel} >Verify OTP sent to your Number</InputLabel>
                <Input
                    className={classes.inputStyle}
                    id="name"
                    width="20%"
                    placeholder = "OTP"
                    onChange = {props.onChange}
                    autoFocus = {true} 
                    inputProps={{maxLength: 4}}
                />   
        </div>)
}

export default OTPINPUT