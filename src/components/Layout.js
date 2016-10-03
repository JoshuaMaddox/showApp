import React, { Component } from 'react'
import  { Link } from 'react-router'

export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>TV Search App</h1>
          <div className="row">
            <Link to='/search' activeClassName='disabled' className='btn btn-primary'>
              Search Results 
            </Link>
            <Link to='/favorites' activeClassName='disabled' className='btn btn-primary'>
              Favorites
            </Link>
          </div>
         {this.props.children}
      </div>
    )
  }
}
