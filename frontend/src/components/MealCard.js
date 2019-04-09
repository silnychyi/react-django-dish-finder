import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class MealCard extends Component {


  state = {
    cardActive: false
  }

  showMore = () => {
    this.setState({cardActive: !this.state.cardActive})
  }


  render() {
    const { index } = this.props
    const { name, price, description, restaurant } = this.props.meal
    const { cardActive } = this.state
    return (
      <div className="MealCard">
        
        <div className="mealcard-number">
          <span>
            {index+1}
          </span>
        </div>

        <div className="mealcard-main-wrap">

          <div className="mealcard-main">
          
            <div className="mealcard-title">
              <span>
                {name}
              </span>
            </div>
            <div className="mealcard-action">
            
              <div className="mealcard-price">
                <span>{price}<i>zł</i></span>
              </div>
              <button 
                className="mealcard-more"
                onClick={this.showMore}
              >
              {cardActive ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                
              </button>
            </div>
          </div>
          {cardActive ?

            <div className="mealcard-detail">
              {description ? 
                <div className="mealcard-descr">{description}</div>
              : null}
              <div className="mealcard-restaurant">
                avaliable in 
                <Link 
                  to={`/restaurant/${restaurant.id}`}
                >{restaurant.name}</Link>
              </div>
            </div>

          : null}
        </div>
      </div>
    )
  }
}

export default MealCard
