import AppDispatcher from '../AppDispatcher'
import API from '../API'

const SearchAction = {
  receiveShows(shows){
    console.log('SearchActions shows received: ', shows)
    AppDispatcher.dispatch({
      type: 'SHOWS_RECEIVED',
      payload: { shows }
    }) 
  }
}
export default SearchAction