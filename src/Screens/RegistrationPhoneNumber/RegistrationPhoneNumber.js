/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../img/DailyGetLogo.png'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../Color'
import PhoneInput from '../../components/PhoneInput'
import { ButtonBlue } from '../../components/UI/Button'
import OTPINPUT from '../../components/OTPINPUT/OTPINPUT';
import { verifyNumber, verifyOTP } from '../../redux/actions/RegistrationActions';
import { Redirect, useHistory } from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%'
    },
    topContainer: {
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grayBlueBG,
    },
    middleContainer: {
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        height: 180,
    },
    logo: {
        width: '80%',
        marginTop: "5%",
        marginLeft: "10%",
        marginRight: "10%",
        height: "70%"
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
    header: {
        height: '95',
        paddingTop: 30,
        paddingLeft: "5%",
        paddingBottom: 8,
        fontSize: 22,
        backgroundColor: colors.grayBlueBG,
    },
    arroWBack: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        '&:hover': {
            background: colors.grayBlueBG
        },
        '&:disabled': {
            background: colors.blueInactive
        }
    }

}));



const RegistrationPhoneNumber = (props) => {
    const classes = useStyles();
    const [mobNum, setMobNum] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isOTP, setIsOTP] = useState(false)
    const [otp, setOTP] = useState('')
    const [otpVerifySuccess, setotpVerifySuccess] = useState(false)
    const usrDtls = useSelector(state => state.registration.usrDtls); //isVerified
    

    const history = useHistory()
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("usrDtls", usrDtls)
    //    if(usrDtls.isVerified) {
    //     setotpVerifySuccess(true)
    //     // history.push('/registration',
    //     //         {
    //     //             mobileNumber: mobNum
    //     //         }
    //     //     )
    //    }
    // }, []);

    const onChangeMobNumHandler = (event) => {
        const value = event.target.value
        let isValid = /^([6-9]\d{9})$/.test(value)
        console.log("[RegistrationPhoneNumber.js] phone number valid ", value, isValid)
        setIsValid(isValid)
        if (isValid) {
            setMobNum(value)
        }
    }

    const proceedButtonAction = () => {
        if (isValid && !isOTP) {
            dispatch(verifyNumber(mobNum));
            setIsOTP(true)
        } else {
            dispatch(verifyOTP(mobNum,otp))
            setotpVerifySuccess(true)
        }
    }
    const handleChangeOTP = (event) => {
        const value = event.target.value
        setOTP(value)
    }

    const isLaoding = useSelector(state => state.loading.showLoader);
    if (isLaoding) {
        return (<FullPageLoader/>)
    }

    return (

        <div className={classes.root}>
            {console.log("usrDtls", usrDtls)}
            {console.log("props.history",history)}
            <div className={classes.header}>
                {isOTP && <button className={classes.arroWBack} onClick={() => setIsOTP(false)}><ArrowBack /></button>}
            </div>
            {otpVerifySuccess && <Redirect to={`/custmerInfo`} from="/registration" />}
            <div className={classes.topContainer}>
                <img className={classes.logo} src={Logo} />
            </div>
            <div className={classes.middleContainer}>
                {!isOTP ? <PhoneInput
                    value={mobNum}
                    placeholder={"registration_phone_placeholder"}
                    onChange={onChangeMobNumHandler} />
                    : <OTPINPUT
                        value={otp}
                        codeLength={4}
                        onChange={handleChangeOTP}
                    />}
            </div>
            {console.log(otp)}
            <div className={classes.footer}>
                <ButtonBlue
                    disabled={!isOTP ? !(mobNum.length > 0) : !(otp.length > 0)}
                    className={classes.button}
                    onClick={proceedButtonAction}>
                    {!isOTP ? 'AGREE AND CONTINUE' : 'VERIFY'}
                </ButtonBlue>
            </div>
        </div>
    )
}

//473 customer
export default RegistrationPhoneNumber;