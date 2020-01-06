import { TOKEN } from '../constants/action-types'
import Axios from '../../config/axios.setup';
export const LOGIN_USER = 'LOGIN_USER'


function fetchLogin(token) {
    localStorage.setItem(TOKEN, token)
}

export function getData() {
    return function (dispatch) {
        return Axios.get('/posts')
            .then((response) => {
                console.log(response)
                dispatch({ type: "DATA_LOADED", payload: response.data });
            })
        // return fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json())
        //     .then(json => {
        //         dispatch({ type: "DATA_LOADED", payload: json });
        //     });
    };
}

export function getComment() {
    return function (dispatch) {
        return Axios.get('/postComment/2')
            .then((response) => {
                dispatch({ type: "COMMENT_LOADED", payload: response.data });
            })
        // return fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json())
        //     .then(json => {
        //         dispatch({ type: "DATA_LOADED", payload: json });
        //     });
    };
}


export function login(user, token) {
    fetchLogin(token)
    return {
        type: LOGIN_USER,
        ...user
    }
}


