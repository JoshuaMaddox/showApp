import $ from 'jquery'
import APIActions from './actions/APIActions';
import SearchActions from './actions/SearchActions'
// import {get} from 'axios';

let showArr = []

const API = {

  getTvShow(searchTerm){
    $.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`, (shows, err) => {
      console.log(shows)
      showArr = []
      shows.map((item, num) => {
        let { show } = item
        let newShow = {
          name: show.name,
          id: show.id,
          sum: show.summary
        }
        showArr.push(newShow)
      })
      SearchActions.receiveShows(showArr)
    })
  }
}

export default API