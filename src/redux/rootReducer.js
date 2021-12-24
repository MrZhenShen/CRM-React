const initialState = {
  isAuthenticated: localStorage.getItem('token') !== "{}",
  isStaff: JSON.parse(localStorage.getItem('token')).is_staff,
  token: JSON.parse(localStorage.getItem('token')).token,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        isAuthenticated: state.isAuthenticated = true,
      }
    case 'LOG_OUT':
      localStorage.setItem("token", JSON.stringify({}))
      return {
        isAuthenticated: state.isAuthenticated = false,
        token: state.token = ""
      }
    case 'IS_STAFF':
      return {
        isStaff: state.isStaff = true
      }
    case 'IS_NOT_STAFF':
      return {
        isStaff: state.isStaff = false
      }
    case 'ADD_TOKEN':
      return {
        token: action.payload.token
      }
    default:
  }
  return state
}