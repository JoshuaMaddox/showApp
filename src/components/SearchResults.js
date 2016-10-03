import React, { Component } from 'react'
import APIActions from '../actions/APIActions'
import ShowsStore from '../stores/ShowsStore'
import FavActions from '../actions/FavActions'

export default class SearchResults extends Component {

  constructor(){
    super()
    this.state = {
      shows: ShowsStore.getShows()  
    }
    this.getSearch = this.getSearch.bind(this)
    this._onChange = this._onChange.bind(this)
    this.favoriteMe = this.favoriteMe.bind(this)
  }

  componentWillMount() {
    ShowsStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    ShowsStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({ 
      shows: ShowsStore.getShows() 
    })
  }

  getSearch(e){
    e.preventDefault()
    let { searchTerm } = this.refs
    let newSearch = searchTerm.value
    searchTerm.value = ''
    APIActions.getSearchResults(newSearch)
  }

  favoriteMe(e){
    e.preventDefault()
    let id = e.target.id
    document.getElementById(id).className = "btn btn-danger"
    document.getElementById(id).innerHTML = "Im Your Fav"
    const { shows } = this.state
    let newArr = shows.filter((show) => {
      return show.id == id
    })
    let myObj = newArr[0]
    newArr = []
    FavActions.receiveFavs(myObj)
  }

  render(){

    const { shows } = this.state
    let showList;
  
    return(
    <div>
      <h1>Search Results</h1>
      <form onSubmit={this.getSearch}>
        <input ref='searchTerm' type="text" placeholder='Search tv shows by name'/>
        <button className="btn btn-lg btn-primary">Search</button>
      </form> 
      <div className="row">
         <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Summary</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {this.state.shows.map((shows, num) => {
              return ( <tr key={shows.id}>
                <td>{shows.name}</td>
                <td>{shows.sum}</td>
                <td><button className="btn btn-primary" id={shows.id} ref={shows.id} onClick={this.favoriteMe}>Favorite Me</button></td>
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div> 
    )
  }
}