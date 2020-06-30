/*
Author: Brajesh Kumar
*/

import React, { useState, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { ORDER, PARTNER_DETAILS, ADD, PARTNER_OFFERINGS } from '../../redux/actions/actionTypes';
import { getPartnerOfferings, getPartnerDetails } from '../../redux/actions/StoreActions';
import Wrapper from '../../hoc/Wrapper';
import CustomButton from '../../components/UI/CustomButton';
import Header from '../../components/Header/Header';
import HContainer from '../../components/UI/HContainer';
import Product from '../../components/Product/Product';
import colors from '../../Color'
import { isMobile } from 'react-device-detect';
import ProductDetails from '../../components/ProductDetails';
import Banner from '../../components/Banner/Banner';
import { ButtonBlue } from '../../components/UI/Button';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        background: ' #FFFFF0 ',
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
        height: 100
    },
    partnerOfferings: {
        //background: ' #FFF009 ',
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

// class Landing extends React.Component {


//     componentDidMount() {
//       this.props.onFetchPartnerOfferings();
//       this.props.onFetchPartnerDetails();
//     }

//     render() { return (
//         <div>
//             {
//              console.log("####",this.state.details, this.props.partnerOfferings)
//             }
//         </div>
//     )
//     }
//   }

const Landing = (props) => {
    const classes = useStyles();
    //const { offerings} = props.partnerOfferings;
    //const partnerdetails = useSelector(state => state.details)
    const dispatch = useDispatch();
    const partnerdetails = {
        imageUrl : "",
        name: "Mc D",
        subHeader: "New Offers",
        desc: "Discont"
    }

    const partnerOfferings = [{
        imageUrl : "https://captainamericadiag618.blob.core.windows.net/uploaded-files/partnerCoverPhoto_15439_1583485492.jpg",
        name: "Mc D",
        desc: "Discont",
        price: "Rs 200"
    }]
    useEffect(() => {
        dispatch(getPartnerDetails())
    }, []
    );

    useEffect(() => {
        dispatch(getPartnerOfferings())
    }, []
    );


    return (
        <div className={classes.root}>
            <Wrapper>
                <Header title='Food Store'></Header>
                <div className={classes.main}>
                    <div className={classes.profile}>
                        <ProductDetails
                        payload = {partnerdetails} 
                        />
                    </div>

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
                        <Product payload= {partnerOfferings}/>
                    </div>
                </div>

                <div className={classes.footer}>
                    <ButtonBlue className={classes.button}> Order </ButtonBlue>

                </div>

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