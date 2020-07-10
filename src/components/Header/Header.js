/*
Author: Brajesh Kumar
*/


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    title: {
        // fontSize: 18,
        textAlign: "center",
        width: '100%',
    },

    toolbar: {
        minHeight: 65,
        alignItems: 'flex-end',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static" color='transparent'>
            <Toolbar className={classes.toolbar}>
                {props.isBack && <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={props.onBackPress}
                >
                    <ArrowBack />
                </IconButton>}

                <Typography className={classes.title} variant="h6" gutterBottom>
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header