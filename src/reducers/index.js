const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.myList.find(item => item.id === action.payload.id)) {
        return state
      }
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find( item => item.id === Number(action.payload))
                ||  state.originals.find( item => item.id === Number(action.payload))  
                ||  []  
      }
    default:
      return state
  }
}


//acá hago un switch dependiendo de las acciones que le mande al reducer.
//El reducer recibe el estado y una acción, y retorna el estado modificado según la acción especificada
export default reducer