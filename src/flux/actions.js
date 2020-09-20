import Dispatch from './dispatcher';
import * as constants from '../constants';

export function prodMethodChanged(newProdMethod) {
    Dispatch.dispatch({
        actionType: constants.NEW_PROD_METHOD,
        newProdMethod
    })
}

export function activeViewChanged(newActiveView) {
    Dispatch.dispatch({
        actionType: constants.ACTIVE_VIEW_CHANGED,
        newActiveView
    })
}