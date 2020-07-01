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
        background: colors.textOrange,
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
    const partnerOfferings = useSelector(state => state.landing.offerings);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const partnerViewData = {
        name: partnerDetails.name,
        address: partnerDetails.address,
        contactNumber: partnerDetails.contactNumber,
        description: partnerDetails.description,
        image: partnerDetails.coverPicture
    }

    const partnerOfferingsViewData =
        partnerOfferings != null && partnerOfferings.filter(item => item.isActive)
            .map(item => {
                console.log("item : ", item)
                return {
                    imageUrl: item.imageUrl,
                    offering: item.offering,
                    offeringSubText: item.offeringSubText,
                    partnerOfferingType: item.partnerOfferingType,
                    longDescription: item.longDescription,
                    createdAt: item.createdAt,
                    cost: item.cost
                }
            });

    useEffect(() => {
        dispatch(getPartnerDetails("3929")); //partnerID
        dispatch(getPartnerOfferings("3929"))
    }, []);

    const onPressOrder = () => {
        setShowModal(!showModal)
    }

    return (
        <div className={classes.root}>
            <Wrapper>
                <Header title={partnerViewData.name}></Header>
                <PartnerDetails partnerViewData={partnerViewData}></PartnerDetails>
                <div className={classes.banner}>
                    Banner
                        {/* <Banner 
                         bannerImage = ""
                         bannerBackgroudImage = ""
                         width ="100%"
                         bannerText= "New Offers"
                         bannerHeading = "Discont"
                         bannerSubText= "Early bird"
                         updatedTime= "732"
                        /> */}
                </div>


                <div className={classes.partnerOfferings} >
                    <Product partnerOfferingsViewData={partnerOfferingsViewData} />
                </div>

                <div className={classes.footer}>
                    <ButtonBlue className={classes.button} onClick={onPressOrder}> Order </ButtonBlue>
                </div>
                {(showModal) && (<ReviewModal />)}
            </Wrapper>
        </div>
    )
}


export default Landing;