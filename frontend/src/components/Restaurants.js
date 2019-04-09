import React, { Component } from 'react'
import Card from './layout/Card'
import { Consumer } from '../context'


export class Restaurants extends Component {

  getKeyword = (value) => {
    this.setState({itemsToDisplay:[]})
    let searchResult = []
    this.state.rests.forEach(item => {
      if (item.name.toLowerCase().includes(value)){
        searchResult.push(item)
      }
    })
    this.setState({result: searchResult})
  }

  loadMore = (page, dispatch, rests) => {
    fetch(`http://localhost:8000/api/rests/?page=${page}`)
    .then(response => response.json())
    .then(data => {
        dispatch({type: "NEXT_RESTAURANTS", payload: rests.concat(data.results)})
        dispatch({type: "INCREMENT_PAGE", payload: page+=1})

    })
  }

  render() {

    return (
      <Consumer>
        {value => {

          const { rests, page, dispatch } = value
          return (
            <div className="Restaurants">
              <div className="list">
                <div className="container">
                  {/* {rests.filter(item => item.name.toLowerCase().includes(keyword)).map((item,index) => {
                    return <Card key={index} rests={item}/>
                  })} */}

                  {rests.map((item, index) => {
                    return <Card key={index} rests={item}/>
                  })}
                  <button
                    className="loadMore"
                    onClick={()=>{
                      this.loadMore(page, dispatch, rests)
                    }}
                  >
                    loadmore
                  </button>
                </div>
              </div>
            </div>
    
          )
        }}
      </Consumer>
    )
  }
}

export default Restaurants
