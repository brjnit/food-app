import moment from 'moment'
//import {getLocalizedString} from './localization/i18n'

export const formatDateTime = (dateString, formatString) =>{
  return moment(dateString).calendar();
}
