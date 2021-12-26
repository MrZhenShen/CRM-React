const initialState = {
  isAuthenticated: localStorage.getItem('credentials') !== "{}" && localStorage.getItem('credentials').error !== "Wrong Credentials",
  isStaff: JSON.parse(localStorage.getItem('credentials')).is_staff,
  token: JSON.parse(localStorage.getItem('credentials')).token
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        isAuthenticated: true
      }
    case 'LOG_OUT':
      localStorage.setItem("credentials", JSON.stringify({}))
      return {
        isAuthenticated: false,
        token: ""
      }
    case 'IS_STAFF':
      return {
        isStaff: true
      }
    case 'IS_NOT_STAFF':
      return {
        isStaff: false
      }
    case 'ADD_TOKEN':
      return {
        token: action.payload.token
      }
    default:
  }
  return state
}