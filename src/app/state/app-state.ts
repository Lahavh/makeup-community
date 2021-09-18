import { UserStatuses } from "../user/user.class";

export interface AppState {
    userStatus: UserStatuses;
}

export const initialState: AppState = {
    userStatus: UserStatuses.LOGGED_IN
}