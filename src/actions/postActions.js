import { FETCH_POSTS } from "./types";

export function fetchPosts(){
    console.log("test fetch");
    return function (dispatch){
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(post => 
                dispatch({
                    type:FETCH_POSTS
                }));
    }
}