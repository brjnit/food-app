/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { ORDER, PARTNER_DETAILS, ADD, PARTNER_OFFERINGS } from '../../redux/actions/actionTypes';
import Wrapper from '../../hoc/Wrapper';
import CustomButton from '../../components/UI/CustomButton';
import Header from '../../components/Header/Header';
import HContainer from '../../components/UI/HContainer';
import Product from '../../components/Product/Product';

const useStyles = makeStyles({
    root: {
        background: ' #FFFFFF ',
        border: 0,
        borderRadius: 3,
        width:'100%',
        alignContent: 'center'
    },

    profile: {
        background: ' #FFF003 ',
        border: 0,
        borderRadius: 3,
        width:345,
        alignContent: 'center'
    },
    partnerOfferings: {
        background: ' #FFF009 ',
        border: 0,
        borderRadius: 3,
        width:345,
        alignContent: 'center'
    }
});

const Landing = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Wrapper>
            <Header title = 'Food Store'></Header>
            <div>
                <div className={classes.profile}> <HContainer ></HContainer></div>
                <div className={classes.partnerOfferings}> <Product/></div>
                {console.log(props)}
            </div>
            <CustomButton label= "Order"/>
        </Wrapper>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        partnerDetails: state.details,
        partnerOfferings: state.offerings,
        orderDetails: state.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: () => dispatch({ type: ADD }),
        onFetchPartnerOfferings: () => dispatch({ type: PARTNER_OFFERINGS }),
        onFetchPartnerDetails: () => dispatch({ type: PARTNER_DETAILS }),
        onOrder: () => dispatch({ type: ORDER }),
    };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Landing);