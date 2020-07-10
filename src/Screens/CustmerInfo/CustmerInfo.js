/*
Author: Brajesh Kumar
*/

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBlue } from '../../components/UI/Button';
import { InputLabel, Input, InputAdornment } from '@material-ui/core';
import { registerUser } from '../../redux/actions/RegistrationActions';
import colors from '../../Color'
import { useDispatch } from 'react-redux';
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

const CustmerInfo = (props) => {
    const classes = useStyles();
    
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const dispatch = useDispatch();
    const onChangeName = (event) => {
        const value = event.target.value
        setName(value)
    }
    const onChangeAddress = (event) => {
        const value = event.target.value
        setAddress(value)
    }
    const onPressNext = () => {
        dispatch(registerUser(name,address))
    }
    return (
        <div className={classes.root}>
            <div className={classes.header}>Tell us about yourself</div>
            <div className={classes.conatiner}>
                <InputLabel className={classes.inputLabel} >What should we call you?</InputLabel>
                <Input
                    className={classes.inputStyle}
                    id="name"
                    width="100%"
                    placeholder = "name"
                    onChange = {onChangeName}
                />
            </div>
            <div className={classes.conatiner}>
                <InputLabel className={classes.inputLabel} >Where do you reach you?</InputLabel>
                <Input
                    className={classes.inputStyle}
                    id="address"
                    width="100%"
                    placeholder = "address"
                    onChange = {onChangeAddress}
                />
            </div>
            <div className={classes.footer}>
                <ButtonBlue className={classes.button} onClick={onPressNext}> Next </ButtonBlue>
            </div>
        </div>
    )
}

export default CustmerInfo;