/*
Author: Brajesh Kumar
*/


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import Call from '@material-ui/icons/Call';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 65,
        width: "100%"
    },

    title: {
        // fontSize: 18,
        textAlign: "center",
        width: '100%',
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
                    {props.isBack && <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick = {props.onBackPress}
                    >
                        <ArrowBack />
                    </IconButton>}

                    <Typography className={classes.title} variant="h6" gutterBottom>
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header