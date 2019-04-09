import React, { Component } from 'react'
import { Link } from 'react-router-dom' 

export class Card extends Component {
  render() {
    const { name, address, phone, id, working_from_hour, working_to_hour, photo, website } = this.props.rests

    return (
      <div className="Card">
            <div className="image">
              {photo != "http://localhost:8000/media/null" ? 
                <img src={photo} alt={name}/>
              : null
              }
            </div>
            <div className="main">
              <div className="main-title">{name}</div>
              <div className="main-address">{address}</div>
            </div>
            <div className="info">
              {working_from_hour && working_to_hour ? 
                <div className="row">
                  <i className="far fa-clock"></i>{working_from_hour.slice(0,5)} - {working_to_hour.slice(0,5)}
                </div>            
              : null}

              <div className="row">{phone}</div>
              {website ? <div className="row">{website}</div> : null}
              
              <Link 
                to={`/restaurants/${id}`}
                className="main-more-info"
              >more</Link>
            </div>
      </div>
    )
  }
}

export default Card
