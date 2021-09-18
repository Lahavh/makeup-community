import { Post } from "../body/components/blog/post.class";

export interface AppState {
    posts: Post[];
}

export const initialState: AppState = {
    posts: []
}