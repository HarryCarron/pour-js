import { EventEmitter } from "events";
import Dispatch from "./dispatcher";

import { PourActions } from "./constants";

const CHANGE_EVENT = "change";



class PourStore extends EventEmitter {

  private current_view = null

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

 setCurrentView(v: any) {
  this.current_view = v;
}

}

const store = new PourStore();

Dispatch.register(action => {
  switch ((action as any).actionType) {
    case PourActions.CHANGED_PROD_METHOD:
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
