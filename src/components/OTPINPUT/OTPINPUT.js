
/*
Author: Brajesh Kumar
*/

import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import style from "./OTPInput.css";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(4),
            width: '15%',
        },
        conatainer: {
           marginTop:10 
        },
        titleText: {
            margin: 10,
            textAlign: 'center',
        },
        input: {
            textAlign: 'center',
        }

    },
}));
const OTPINPUT = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.conatainer} >
            <div className={classes.titleText} >Verify OTP sent to your Number</div>
            <form className={classes.root} noValidate autoComplete="off">

                <TextField className={style.input} id="standard-secondary" label="" error = {false} autoFocus = {true} maxLength = {1}/>
                <TextField id="standard-secondary" label="" />
                <TextField id="standard-secondary" label=""  />
                <TextField id="standard-secondary" label="" />
            </form>
        </div>)
}

export default OTPINPUT