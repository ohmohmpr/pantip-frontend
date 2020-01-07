import { TOKEN } from '../../config/constant'
import Axios from '../../config/api.service';

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'


function fetchLogin(token) {
    localStorage.setItem(TOKEN, token)
}

export function login(user, token) {
    fetchLogin(token)
    console.log(user)
    return {
        type: LOGIN_USER,
        ...user
    }
}






function fetchLogout() {
    localStorage.removeItem(TOKEN)
}

export function logout() {
    fetchLogout()
    return {
        type: LOGOUT_USER,
    }
}










export function getData() {
    return function (dispatch) {
        return Axios.get('/posts')
            .then((response) => {
                console.log(response.data)
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



