import React, { Component } from 'react'
import FavStore from '../stores/FavStore'

export default class Favorites extends Component {

  constructor(){
    super()
    this.state = {
      favs: FavStore.getFavs()  
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    FavStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    FavStore.stopListening(this._onChange);
  }

  _onChange() {
    console.log('FavComp _OnChange was called')
    this.setState({ 
      favs: FavStore.getFavs() 
    })
  }

  render(){
    return(
    <div>
      <h1>Favorites</h1>
      <div className="row">
         <table className="table">
          <thead>
            <tr>
              <th>Fav Name</th>
              <th>Fav Summary</th>
              <th>I'm a Fav</th>
            </tr>
          </thead>
          <tbody>
          {this.state.favs ? this.state.favs.map((favs, num) => {
              return ( <tr key={favs.id}>
                <td>{favs.name}</td>
                <td>{favs.sum}</td>
                <td><button className="btn btn-danger" id={favs.id} ref={favs.id}>I'm Your Fav</button></td>
              </tr>
              )
            }) : <div></div>
          }
          </tbody>
        </table>
      </div>
    </div>
    )
  }
}

