export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  login: 'LOGIN_REQUEST',
}

export const setFavorite = payload => ({
  type: actions.setFavorite,
  payload,
})

export const deleteFavorite = payload => ({
  type: actions.deleteFavorite, 
  payload,
})

export const loginRequest = payload => ({
  type: actions.login,
  payload
})

//acá la acción recibe información sobre lo que tiene que añadir (payload) y devolvemos el tipo de acción con la información que se añadió.