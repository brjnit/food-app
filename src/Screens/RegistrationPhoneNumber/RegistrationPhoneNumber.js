/*
Author: Brajesh Kumar
*/

import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../img/DailyGetLogo.png'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../Color'
import PhoneInput from '../../components/PhoneInput'
import { ButtonBlue } from '../../components/UI/Button'
import OTPINPUT from '../../components/OTPINPUT/OTPINPUT';
import {verifyNumber, verifyOTP} from '../../redux/actions/RegistrationActions';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    container: {
        flex: 1,
        backgroundColor: colors.white,
        flexDirection: 'Column',
        width: '100%'
    },
    topContainer: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grayBlueBG,
    },
    middleContainer: {
        height: 250,
    },
    logo: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },

    footer: {
        marginBottom: 40,
        marginTop: 12,
        marginRight: 16,
        marginLeft: 16
    },

    button: {
        width: '100%',
        height: 48,
    },

}));



const RegistrationPhoneNumber = (props) => {
    const classes = useStyles();
    const [mobNum, setMobNum] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isOTP, setIsOTP] = useState(true)
    const [otp, setOTP] = useState('')
    const [otpVerifySuccess, setotpVerifySuccess] = useState(false)
    const phoneNumber = useSelector(state => state.registration.usrDtls);

    const dispatch = useDispatch();
    useEffect(() => {
       
        //console.log(props.match.params)
        
    }, []);

    const onChangeMobNumHandler = (event) => {
        const value = event.target.value
        let isValid = /^([6-9]\d{9})$/.test(value)
        console.log("[RegistrationPhoneNumber.js] phone number valid ", value, isValid)
        setMobNum(value)
        setIsValid(isValid)
    }

    const proceedButtonAction = () => {
        if (isValid && !isOTP) {
            //dispatch(verifyNumber(mobNum));
            setIsOTP(true)
        } else {
            setotpVerifySuccess(true)
            props.history.push("/registration")
        }
    }
    const handleChangeOTP = otp => { setOTP(otp) }

    return (
        
        <div className={classes.root}>
        {otpVerifySuccess && <Redirect to={`/partners` } from="/registration" />}
            <div className={classes.topContainer}>
                <div className={classes.logo}>
                    <img width='100%' src={Logo} />
                </div>
            </div>
            <div className={classes.middleContainer}>
                {!isOTP ? <PhoneInput
                    value = {mobNum} 
                    placeholder={"registration_phone_placeholder"}
                    onChange={onChangeMobNumHandler} />
                    : <OTPINPUT 
                    value = {otp}
                    codeLength = {4}
                    onChange={handleChangeOTP}
                    />}
            </div>
            <div>
                <ButtonBlue className={classes.button} onClick={proceedButtonAction}>{!isOTP ? 'AGREE AND CONTINUE' : 'VERIFY'}  </ButtonBlue>
            </div>
        </div>
    )
}


export default RegistrationPhoneNumber 