/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { SUMMARY_DONE } from '../../redux/actions/actionTypes';
import Wrapper from '../../hoc/Wrapper';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3
    },
});

const Summary = (props) => {
    const classes = useStyles();
    return (
        <Wrapper>
            <div className={classes.root}>
                {console.log(props)}
              Summary Screen
            </div>
        </Wrapper>
    )
}

const mapStatetoProps = state => {
    return {
        summary: state.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDone: () => dispatch({ type: SUMMARY_DONE }),
    };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Summary);