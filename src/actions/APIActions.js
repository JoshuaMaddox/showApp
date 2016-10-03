import AppDispatcher from '../AppDispatcher'
import API from '../API'

const APIActions = {
  getSearchResults(searchTerm){
    API.getTvShow(searchTerm) 
  }
}

export default APIActions