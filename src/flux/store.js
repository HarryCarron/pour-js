import { EventEmitter } from "events";
import Dispatch from "./dispatcher";

import * as Constants from "./constants";

const CHANGE_EVENT = "change";

class PourStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const store = new PourStore();

Dispatch.register(action => {
  switch (action.actionType) {
    case Constants.CHANGED_PROD_METHOD:
      store.emitChange();
      break;
      default: // nothing
  }
});

export default store;
