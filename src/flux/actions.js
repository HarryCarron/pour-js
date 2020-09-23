import Dispatch from './dispatcher';
import { PourActions } from './constants';

export function prodMethodChanged(newProdMethod) {
    Dispatch.dispatch({
        actionType: PourActions.NEW_PROD_METHOD,
        newProdMethod
    })
}

export function activeViewChanged(newActiveView) {
    Dispatch.dispatch({
        actionType: PourActions.ACTIVE_VIEW_CHANGED,
        newActiveView
    })
}