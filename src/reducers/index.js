const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}


//acá hago un switch dependiendo de las acciones que le mande al reducer.
//El reducer recibe el estado y una acción, y retorna el estado modificado según la acción especificada
export default reducer