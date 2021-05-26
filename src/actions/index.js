export const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  login: 'LOGIN_REQUEST',
  logout: 'LOGOUT_REQUEST',
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

export const logoutRequest = payload => ({
  type: actions.logout, 
  payload,
})


//acá la acción recibe información sobre lo que tiene que añadir (payload) y devolvemos el tipo de acción con la información que se añadió.