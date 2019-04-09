import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from '../layout/Search'
import { Consumer } from '../../context' 

export class Header extends Component {

  onLogoClick = (dispatch) => {
    dispatch({type: "GET_KEYWORD", payload: ""})
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className="Header">
              <Link
                to="/"
                className="logo"
                onClick={()=>{
                  this.onLogoClick(dispatch)
                }}
              >logo</Link>
              <Search/>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default Header
