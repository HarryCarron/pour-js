import Dispatch from './dispatcher';
import { PourActions } from './constants';

export function brewTypeChanged(newBrewMethod) {
    Dispatch.dispatch({
        actionType: PourActions.BREW_METHOD_CHANGED,
        newBrewMethod
    })
}

export function activeViewChanged(newActiveView) {
    Dispatch.dispatch({
        actionType: PourActions.ACTIVE_VIEW_CHANGED,
        newActiveView
    })
}