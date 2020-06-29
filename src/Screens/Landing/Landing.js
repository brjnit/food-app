/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { ORDER, PARTNER_DETAILS, ADD, PARTNER_OFFERINGS } from '../../redux/actions/actionTypes';
import { getPartnerOfferings, getPartnerDetails} from '../../redux/actions/StoreActions';
import Wrapper from '../../hoc/Wrapper';
import CustomButton from '../../components/UI/CustomButton';
import Header from '../../components/Header/Header';
import HContainer from '../../components/UI/HContainer';
import Product from '../../components/Product/Product';
import colors from '../../Color'
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
    root: {
        display:'flex',
        flexDirection: 'column',
        background: ' #FFFFFF ',
        border: 0,
        borderRadius: 3,
        width:'100%',
        alignContent: 'center',
        justifyContent: 'center'
    },

    profile: {
        background: ' #FFF003 ',
        border: 0,
        borderRadius: 3,
        width:345,
        justifyContent: 'center',
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
    const partnerDetails = useSelector(state => state.details)
    const productDetails = useSelector(state => state.productDetails)
    const dispatch = useDispatch();
    
    useEffect(
        ()=>dispatch(getPartnerDetails())
    )

    const onProductAdd = (data) =>{
        //logic here
        //dispatch()
    }
    
    return (
        <div className={classes.root}>
        <Wrapper>
            <Header title = {partnerDetails.name}></Header>
            <div>
                <div className={classes.profile}> <HContainer ></HContainer></div>
                <div className={classes.partnerOfferings}> <Product productsData = {productDetails} productSelectHandler = {onProductAdd}/></div>
                {console.log(props)}
            </div>
            <CustomButton label= "Order" textColor= "white" background = "blue"/>
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
        onFetchPartnerOfferings: () => dispatch(getPartnerOfferings()),
        onFetchPartnerDetails: () => dispatch(getPartnerDetails()),
        onOrder: () => dispatch({ type: ORDER }),
    };
}

export default connect(mapStatetoProps, mapDispatchToProps)(Landing);