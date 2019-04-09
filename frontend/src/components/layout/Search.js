import React, { Component } from 'react'
import { Consumer } from '../../context'


export class Search extends Component {


    state = {
        value: ""
    }


    getMeals = (value, order, dispatch) => {
        dispatch({type: "GET_KEYWORD", payload: value});
        fetch(`http://localhost:8000/api/ms/?search=${value}&ordering=${order}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({type: "GET_MEALS", payload: data.results})
            dispatch({type: "GET_NEXT_PAGE", payload: data.next})
            dispatch({type: "GET_COUNT", payload: data.count})
        })

    }

  render() {

    return(
      <Consumer>
        {value => {

          const { dispatch, order } = value
          
          return (
            <div className="Search">
              <form onSubmit={(e)=>{
                e.preventDefault()
                this.getMeals(this.state.value, order, dispatch);
              }}>
                <input
                  placeholder="Search for dish"
                  className="search-input"
                  value={this.state.value}
                  onChange={e=>{
                    this.setState({value: e.target.value});
                    this.getMeals(e.target.value, order, dispatch);
                  }}
                />
              </form>
            </div>
          )
        }}
      </Consumer>
    )

    
  }
}

export default Search
