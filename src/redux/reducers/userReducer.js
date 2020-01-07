import { LOGIN_USER, LOGOUT_USER } from '../actions'
import jwtDecode from 'jwt-decode'

const initialState = () => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token) {
    return jwtDecode(token)
  } else {
    return {
      role: "guest"
    }
  }
}

function userReducer(currentUser = initialState(), action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        id: action.id,
        username: action.username,
        profile_img_url: action.profile_img_url,
        role: action.role,
      }
    case LOGOUT_USER:
      return {
        role: "guest"
      }
    default:
      return currentUser
  }
}


export default userReducer