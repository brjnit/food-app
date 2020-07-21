import {getAPITemplate} from './APIDefinition'
import {GET, POST} from './MethodType'
import {API_URL} from '../../config'
import APIResponseHelper from './APIResponseHelper'
import {showLoadingIndicator, hideLoadingIndicator} from '../../redux/actions/LoadingActions'
import store from '../../redux/store/ConfigureStore'
 
export default class APIRequest {
    callAPI = async (apiName, inputParams, showLoading) =>{
        if(showLoading == null || showLoading == undefined)
            showLoading = true
        let requestTemplate = null;
        requestTemplate = getAPITemplate(apiName)
        console.log("[APIRequest.js]  requestTemplate :: ",requestTemplate);
        if(requestTemplate !=null){
            let postBody = null;
            let url = API_URL;
            let requestPath = "";
            if(requestTemplate.method == GET){
                requestPath = this.generateGETRequest(requestTemplate, inputParams);
                postBody = {};
                url = url+ requestPath;
            } else {
                postBody = this.generatePOSTBody(requestTemplate, inputParams);
                url = url+this.generateGETRequest(requestTemplate, inputParams);
            }
            console.log("[APIRequest.js]  final url :: ", url);
            let response = null;
            try{
                if(showLoading)
                    store.dispatch(showLoadingIndicator());
                console.log("[APIRequest.js] input parameters for API Request :: ", postBody)
                response = await fetch(url, postBody);
                const responseHelper = new APIResponseHelper();
                return await responseHelper.parseResponse(response, showLoading);
            }catch (error){
                if(showLoading)
                    store.dispatch(hideLoadingIndicator());
                console.log("[APIRequest.js] error while making API request :: ", error);
                //store.dispatch(showNotification('Error', 'Uh Oh, Something went wrong.', ' Please try again'))
                return {status : 500, dataAvailable : false, data : null}
            }    
        }       
    }

    generateGETRequest = (requestTemplate, inputParams) =>{
        const paramNames = requestTemplate.params;
        let path = requestTemplate.path
        if(paramNames == null || paramNames == undefined){
            return requestTemplate.path;
        } else {
            for(let i = 0; i < paramNames.length; i++){
                console.log("[APIRequest.js]  paramValue :: ", inputParams[paramNames[i]]);
                path = path.replace("$"+paramNames[i], inputParams[paramNames[i]])
            }
            //requestTemplate["path"] = path;
            return path;
        }
    }

    generatePOSTBody = (requestTemplate, inputParams) =>{
        let body = {
            method: requestTemplate.method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputParams)
        }
        return body
    }
}