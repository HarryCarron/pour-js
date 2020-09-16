import Dispatch from './dispatcher';
import * as constants from '../constants';

export function prodMethodChanged(newProdMethod) {
    Dispatch.dispatch({
        actionType: constants.NEW_PROD_METHOD,
        newProdMethod
    })
}