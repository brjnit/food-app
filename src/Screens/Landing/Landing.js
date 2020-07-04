/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { getPartnerOfferings, getPartnerDetails, getOrders } from '../../redux/actions/StoreActions';
import Wrapper from '../../hoc/Wrapper';
import Header from '../../components/Header/Header';
import PartnerDetails from '../../components/UI/PartnerDetails';
import Product from '../../components/ProductOfferings/Product';
import colors from '../../Color'
import Banner from '../../components/Banner/Banner';
import { ButtonBlue } from '../../components/UI/Button';

import Modal from '@material-ui/core/Modal';
import ReviewModal from '../../components/ReviewModal';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: colors.white,
        border: 0,
        borderRadius: 3,
        width: '100%'
    },

    main: {
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16
    },

    profile: {
        // background: ' #0FF003 ',
    },
    banner: {
        height: 120,
        background: colors.white,
    },
    partnerOfferings: {
        //background: ' #FFF009 ',
        marginTop: 50,
        marginLeft: 16
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
    }

});

const Landing = (props) => {
    const classes = useStyles();
    const partnerDetails = useSelector(state => state.landing.partnerDetails);
    const catloglaData = useSelector(state => state.landing.offerings.catloglaData);
    const bannerData = useSelector(state => state.landing.offerings.bannerData);

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const [isConfirmed, setConfirmed] = useState(false)
    const orders = [{
        itemName: "chapati",
        amount: 20,
        quantity: 4
    }, {
        itemName: "chapati",
        amount: 20,
        quantity: 4
    }]
    useEffect(() => {
        dispatch(getPartnerDetails("3929")); //partnerID
    }, []);
    useEffect(() => {
        dispatch(getPartnerOfferings("3929"))
    }, []);

    const onPressOrder = () => {
        //setShowModal(!showModal)
        setConfirmed(true)
       
    }

    return (
        <div>
            {!isConfirmed && (<div className={classes.root}>
            <Wrapper>
                <Header title={partnerDetails.name}></Header>
                <PartnerDetails partnerViewData={partnerDetails}></PartnerDetails>
                <div className={classes.banner}>
{console.log(props)}
                    {bannerData != null && (<Banner
                        bannerImage={bannerData.imageUrl}
                        // bannerBackgroudImage = ""
                        bannerText={bannerData.offering}
                        bannerHeading="Discont"
                        bannerSubText={bannerData.offeringSubText}
                        updatedTime={bannerData.updateDate}
                    />)
                    }

                </div>
                <div className={classes.partnerOfferings} >
                    <Product partnerOfferingsViewData={catloglaData} />
                </div>
                <div className={classes.footer}>
                    <ButtonBlue className={classes.button} onClick={onPressOrder}> Order </ButtonBlue>
                </div>
                {(showModal) && (<ReviewModal show={showModal} orders={orders} />)}
            </Wrapper>
        </div>)}
        {isConfirmed && <Redirect to = "/summary" from = "landing"/>}

        </div>
    )
}


export default Landing;