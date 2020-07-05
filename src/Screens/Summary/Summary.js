/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { SUMMARY_DONE } from '../../redux/actions/actionTypes';
import Wrapper from '../../hoc/Wrapper';
import Header from '../../components/Header/Header';
import { ButtonBlue } from '../../components/UI/Button';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3
    },
    footer: {
        marginBottom: 40,
        marginTop: 12,
        marginRight: 16,
        marginLeft: 16
    },
});

const Summary = (props) => {
    const classes = useStyles();

    const onPressDone = () => {
        props.history.goBack()   
    }

    return (
        <Wrapper>
           
            <Header title="Summary"/>
            <div className={classes.root}>
                {console.log(props)}
              Summary Screen
            </div>
            <div className={classes.footer}>
                    <ButtonBlue className={classes.button} onClick={onPressDone}> Done </ButtonBlue>
                </div>
        </Wrapper>
    )
}

export default Summary;