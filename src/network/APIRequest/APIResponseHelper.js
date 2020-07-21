import { showLoadingIndicator, hideLoadingIndicator } from "../../redux/actions/LoadingActions";
import store from '../../redux/store/ConfigureStore';


export default class APIResponseHelper {
    parseResponse = async ( response) => {
        
        let status = response.status;
        let dataAvailable = false;
        let jsonData = null;
        if(status == 200){
            let data = await response.text();
            console.log("[APIResponseHelper.js] response data :: ", data, data.length)
            try{
                if(data != null && data != undefined && data.length > 1){
                    jsonData = JSON.parse(data);
                    dataAvailable = true;
                    if(jsonData.status == "error"){
                        status = 500;
                        //store.dispatch(showNotification('Error', jsonData.message, ''))   
                    }
                }
            }catch (error){
                console.log("[APIResponseHelper.js] exception trying to parse the response :: ", error)
            } finally{
                if(showLoadingIndicator)
                    store.dispatch(hideLoadingIndicator());
            }
        }else{
            //store.dispatch(showNotification('Error', 'Uh Oh, Something went wrong.', ' Please try again'))
            if(showLoadingIndicator)
                store.dispatch(hideLoadingIndicator());
        }
        console.log("[APIResponseHelper.js] returning from APIResponseHelper")
        return {status : status, dataAvailable : dataAvailable, data : jsonData}
    }
}