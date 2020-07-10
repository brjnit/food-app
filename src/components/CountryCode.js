import React from 'react'
import colors from '../Color'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop : 10,
        marginRight: 12
    },

    line : {
        backgroundColor : colors.gray03,
        width : '100%',
        marginTop : 10,
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