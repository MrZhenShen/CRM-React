const initialState = {
  isAuthenticated: localStorage.getItem('credentials') ? true : false,
  isStaff: localStorage.getItem('credentials') 
  ? JSON.parse(localStorage.getItem('credentials')).is_staff
  : false
}

export default function rootReducer(state = initialState, action) {
  if(!localStorage.getItem('credentials')) {
    localStorage.setItem('credentials', JSON.stringify({'id': '0', 'token': '0'}))
  }
  if(!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
  }

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
    default: 
      return state
  }
}