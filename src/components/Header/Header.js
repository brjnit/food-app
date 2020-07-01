/*
Author: Brajesh Kumar
*/


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Call from '@material-ui/icons/Call';
import ArrowBackSharp from '@material-ui/icons/ArrowBackSharp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 65,
        width: "100%"
    },

    title: {
        fontSize: 18,
        justifyContent: "center",
        alignContent: 'center'
    },

    toolbar: {
        minHeight: 90,
        alignItems: 'flex-end',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static" color='transparent'>
                <Toolbar className={classes.root}>
                    <Typography variant="h6" gutterBottom>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header