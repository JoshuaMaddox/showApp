import AppDispatcher from '../AppDispatcher'

const FavAction = {
  receiveFavs(fav){
    console.log('FavActions shows received: ', fav)
    AppDispatcher.dispatch({
      type: 'FAVS_RECEIVED',
      payload: { fav }
    }) 
  }
}

export default FavAction