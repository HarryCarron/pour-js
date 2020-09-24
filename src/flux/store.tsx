import { EventEmitter } from "events";
import Dispatch from "./dispatcher";
import { PourActions, brewMethods } from "./constants";
import { brewWeights } from "./../objects/objects";

const CHANGE_EVENT = "change";



class PourStore extends EventEmitter {

  private current_view = null
  private current_brew_weights: any[] = [];

  addChangeListener(callback: () => void) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: () => void) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCurrentView() {
    return this.current_view;
  }



  setCurrentView(v: any) { //! todo type!
    this.current_view = v;
  }

  setCurrentBrewType(v: brewMethods) { //! todo type!
    this.current_brew_weights = brewWeights[v];
  }

  getBrewWeights() {
    return this.current_brew_weights;
  }


}

const store = new PourStore();

Dispatch.register(action => {
  switch ((action as any).actionType) {
    case PourActions.BREW_METHOD_CHANGED:
      store.setCurrentBrewType((action as any).newBrewMethod);
      store.emitChange();
      break;
    case PourActions.ACTIVE_VIEW_CHANGED:
      store.setCurrentView((action as any).newActiveView);
      store.emitChange();
      break;
      default: // nothing
  }
});

export default store;
