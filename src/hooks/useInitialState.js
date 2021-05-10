import { useState, useEffect } from 'react'

const useInitialState = (API) => {

  //la idea es primero generar el estado
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] })

  //luego con useEffect añado la lógica de la carga inicial.
  useEffect ( () => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(API)
        const data = await response.json()
        return setVideos(data)
      }
      catch (error){
        console.error(error)
      }      
    }
    fetchVideos()
  }, [])

  //Finalmente, luego del useEffect retornamos el estado.
  return videos
}

export default useInitialState