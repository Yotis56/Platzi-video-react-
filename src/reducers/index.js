const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return {
        ...action.payload,
      };
    case 'SET_FAVORITE':
      if (state.mylist.find((item) => item.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        mylist: state.mylist.filter((item) => item.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
        state.originals.find((item) => item.id === Number(action.payload)) ||
        [],
      };
    default:
      return state;
  }
};

//acá hago un switch dependiendo de las acciones que le mande al reducer.
//El reducer recibe el estado y una acción, y retorna el estado modificado según la acción especificada
export default reducer;
