import React, { Component } from 'react'
import MealCard from './MealCard'
import { Consumer } from '../context'

export class Meals extends Component {


    state = {
        order: ""
    }

    loadMore = ( dispatch, meals, nextPage) => {
        fetch(nextPage)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({type: "GET_MEALS", payload: meals.concat(data.results)})
            dispatch({type: "GET_NEXT_PAGE", payload: data.next})
            dispatch({type: "GET_COUNT", payload: data.count})
    
        })
    }

    updateView = (value, order, dispatch) => {
        fetch(`http://localhost:8000/api/ms/?search=${value}&ordering=${order}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({type: "GET_MEALS", payload: data.results})
            dispatch({type: "GET_NEXT_PAGE", payload: data.next})
            dispatch({type: "GET_COUNT", payload: data.count})
        })
    }

    setOrder = (order, dispatch) => {
        dispatch({type: "GET_ORDER", payload: order})
    }

    

  render() {
    return (
        <Consumer>
            {value=>{
                const { meals, dispatch, nextPage, mealsCount, keyword, order } = value
                return(
                    <div className="Meals">
                        <div className="list">
                            <div className="container">
                                    <div className="meals-config">
                                        <div className="meals-count">
                                            <div>
                                                {mealsCount}
                                                <span>dishes found</span>
                                            </div>
                                        </div>
                                        { mealsCount !== 0 ?
                                            <div className="meal-order">
                                                <span>Order by</span>
                                                <button
                                                    value="price"
                                                    className={
                                                        order == "price" ? "order-option order-option-active" : "order-option"
                                                    }
                                                    onClick={(e)=>{
                                                        this.setOrder(e.target.value, dispatch)
                                                        this.updateView(keyword, e.target.value, dispatch)
                                                    }}
                                                >
                                                    price <i className="fas fa-chevron-up"></i>
                                                </button>
                                                <button
                                                    value="-price"
                                                    className={
                                                        order == "-price" ? "order-option order-option-active" : "order-option"
                                                    }
                                                    onClick={(e)=>{
                                                        this.setOrder(e.target.value, dispatch)
                                                        this.updateView(keyword, e.target.value, dispatch)
                                                    }}

                                                >
                                                    price <i className="fas fa-chevron-down"></i>
                                                </button>
                                                <button
                                                    className="order-option order-option-clear"
                                                    onClick={()=>{
                                                        this.setOrder("", dispatch)
                                                        this.updateView(keyword, "", dispatch)

                                                    }}
                                                >
                                                    <i className="fas fa-times"></i>
                                                </button>

                                            </div>
                                        : null}
                                    </div>
                                {meals.map((item, index)=>{
                                    return <MealCard key={index} meal={item} index={index} />
                                })}
                                {nextPage !== null ? 
                                    <button
                                        className="loadMore"
                                        onClick={()=>{
                                        this.loadMore(dispatch, meals, nextPage)
                                        }}
                                    >
                                        load more
                                    </button>
                                : null}
                                

                            </div>
                        </div>
                    </div>
      
                )
            }}
        </Consumer>
    )
  }
}

export default Meals
