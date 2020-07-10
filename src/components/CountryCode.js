import React from 'react'
import colors from '../Color'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop : 20,
        marginRight: 6
    },

    line : {
        backgroundColor : colors.gray03,
        width : '100%',
        marginTop : 2,
        height : 1
    }
}));
const CountryCode = (props) =>{
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <div>+91</div>
            <div className = {classes.line}></div>
        </div>
    )
}

export default CountryCode