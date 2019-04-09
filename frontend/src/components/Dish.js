import React, { Component } from 'react'

export class Dish extends Component {
  render() {
    const { index } = this.props
    const { name, description, price } = this.props.dish
    return (
      <div className="Dish">
        <div className="dish-number">
            <span>{index+1}</span>
        </div>
        <div className="dish-main">
            <div className="dish-title">
                {name}
            </div>
            {description !== "" ? 
                <div className="dish-descr">
                    {description}
                </div>
            :null}
        </div>
        <div className="dish-price">
            {price}<span>zł</span>
        </div>
      </div>
    )
  }
}

export default Dish
