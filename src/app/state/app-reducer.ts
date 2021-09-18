import { Action } from "./app-actions";
import { AppState } from "./app-state";

export function appReducer(state: AppState, action: Action) {
    switch (action.type) {
        case "SIGN_UP_BUTTON": {
            return state;
        }
        default: {
            return state;
        }
    }
}