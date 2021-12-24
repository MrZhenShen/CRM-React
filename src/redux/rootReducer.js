const initialState = {
  isAuthenticated: localStorage.getItem('credentials') !== "{}",
  isStaff: JSON.parse(localStorage.getItem('credentials')).is_staff,
  credentials: JSON.parse(localStorage.getItem('credentials')).token,
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        isAuthenticated: state.isAuthenticated = true,
      }
    case 'LOG_OUT':
      localStorage.setItem("credentials", JSON.stringify({}))
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