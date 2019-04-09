import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Home extends Component {


  render() {
    return(
      <div className="Home">
      <h1>Find dish you want!</h1>
      <Link to="/meals">
          <button
            className="show-all-button"
          >Show all</button>
      </Link>

    </div>

    )
  }
  
}

export default Home
