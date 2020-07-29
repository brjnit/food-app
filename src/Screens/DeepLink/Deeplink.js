/*
Author: Brajesh Kumar
*/

import React from 'react'
import { useSelector } from 'react-redux';
import StoreFront from '../StoreFront/StoreFront';
import Partenrs from '../Partners/Partners';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
const Deeplink = (props) => {
    const { partnersList, selectedStoreOrGroup } = useSelector(state => state.partners);
    const isLaoding = useSelector(state => state.loading.showLoader);
    const storeConfig = {
        selectedStoreOrGroup: selectedStoreOrGroup
    }

    const partnerConfig = {
        partnersList: partnersList,
    }
    return (<div>
        {isLaoding ? (<FullPageLoader />) : 
        <div>
            {selectedStoreOrGroup && selectedStoreOrGroup.isGroup ?
             (<Partenrs {...partnerConfig}/>) :  
             (<StoreFront {...storeConfig}/>)}
        </div>
        }
    </div>)
}

export default Deeplink