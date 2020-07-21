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
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: colors.white,
        border: 0,
        width: '100%',
        //alignItems: 'center',
    },

    main: {
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16
    },

    profile: {
        // background: ' #0FF003 ',
        width: '100%',
    },
    banner: {
        height: 120,
        background: colors.white,
        width: '100%',
    },
    partnerOfferings: {
        //background: ' #FFF009 ',
        marginTop: 50,
        marginLeft: 16,
        marginRight: 16
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

const StoreFront = (props) => {
    const classes = useStyles();
    const partnerDetails = useSelector(state => state.landing.partnerDetails);
    const catloglaData = useSelector(state => state.landing.offerings.catloglaData);
    const bannerData = useSelector(state => state.landing.offerings.bannerData);

    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false)
    const [isConfirmed, setConfirmed] = useState(false)
    const [cartProductCount, setCartProductCount] = useState([])
    const orders = [{
        itemName: "chapati",
        amount: 20,
        quantity: 4
    }, {
        itemName: "Curry",
        amount: 20,
        quantity: 4
    }]
    useEffect(() => {
        console.log(props.match.params)
        dispatch(getPartnerDetails(props.match.params.id)); //partnerID
    }, []);
    useEffect(() => {
        dispatch(getPartnerOfferings(props.match.params.id))
    }, []);

    const onPressOrder = () => {
        setShowModal(!showModal)
    }

     /***************************************************************
     * funtion : prodctAddDeleteHandler 
     * description : to handle the plus minus action for a product
     *               and update cart accordingly
     ****************************************************************/
    const prodctAddDeleteHandler = (value, id, type) =>{
        console.log("[StoreFront.js] value, id :: ", value, id, type)

        let countData = [...cartProductCount]

        const index = countData.findIndex((e) => e.id ==id);
        if (index === -1) {
            countData.push({id : id, count : 1, type : type});
        } else {
            if(value == 0){
                countData.splice(index, 1)
            }else{
                let row = countData[index];
                countData[index] = {...row, count : value};
            } 
        }
        setCartProductCount(countData)
        console.log(" countData", countData)
        // this.setState({
        //     cartProductCount : countData,
        //     selectedProductCount : value
        // })
    }
   
    const isLaoding = useSelector(state => state.loading.showLoader);
    if (isLaoding) {
        return (<FullPageLoader/>)
    }

    return (
        <div>
            {!isConfirmed && (<div className={classes.root}>
            <Wrapper>
                <Header title={partnerDetails.name} 
                isBack = {true} 
                onBackPress = {() => props.history.goBack()}/>
                <PartnerDetails className={classes.profile} partnerViewData={partnerDetails}></PartnerDetails>
                {bannerData != null && bannerData.length>0 && (<Banner
                        bannerImage={bannerData.imageUrl}
                        // bannerBackgroudImage = ""
                        bannerText={bannerData.offering}
                        bannerHeading="Discont"
                        bannerSubText={bannerData.offeringSubText}
                        updatedTime={bannerData.updateDate}
                    />)
                    }
                    {catloglaData !=null && catloglaData.length>0 &&
                    <div className={classes.partnerOfferings} >
                    <Product partnerOfferingsViewData={catloglaData} prodctAddDeleteHandler = {prodctAddDeleteHandler}/>
                </div>}
                
                <div className={classes.footer}>
                    <ButtonBlue disabled = {!(cartProductCount.length>0)} className={classes.button} onClick={onPressOrder}> Order </ButtonBlue>
                </div>
                {(showModal) && (<ReviewModal show={showModal} orders={orders} />)}
            </Wrapper>
        </div>)}
        </div>
    )
}


export default StoreFront;