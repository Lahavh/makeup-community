import { UserStatuses } from "../user/user.class";
import { Action } from "./app-actions";
import { AppState } from "./app-state";

export function appReducer(state: AppState, action: Action) {
    switch (action.type) {
        case "SIGN_IN_BUTTON": {
            if (state.userStatus == UserStatuses.LOGGED_IN) {
                state.userStatus = UserStatuses.LOGGED_OUT;
            }
            else {
                state.userStatus = UserStatuses.LOGGED_IN;
            }

            return state;
        }
        default: {
            return state;
        }
    }
}