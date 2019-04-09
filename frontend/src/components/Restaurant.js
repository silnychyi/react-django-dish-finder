import React, { Component } from 'react'
import { Consumer } from '../context'
import { Link } from 'react-router-dom'
import Dish from './Dish'

export class Restaurant extends Component {


    componentDidMount(){
        fetch(`http://localhost:8000/api/rests/${this.props.match.params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.dispatch({type: "GET_RESTAURANT", payload: data})
        })
    }


  render() {
    return (
        <Consumer>
            {value => {
                const { name, address, website, meals } = value.restaurant
                address ? console.log(address.split(" ").join(",").split("/").join(",")) :null
                return(
                <div className="Restaurant">
                    <div className="restaurant-card-wrap">
                        <div className="container">
                            <div className="restaurant-card">
                                <div className="restaurant-toprow">
                                    <Link className="back-button" to="/meals">
                                        <i className="fas fa-chevron-left"></i>back
                                    </Link>
                                    <h1 className="title">{name}</h1>
                                </div>

                                <div className="restaurant-main">
                                    <div className="restaurant-descr">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda velit repellat eos beatae, dolores voluptatibus iste enim quos id veniam tempora maxime tenetur? Atque, molestiae. Laudantium, consectetur quidem voluptate natus reprehenderit eaque hic maiores eum corporis ipsa, tenetur quasi? Doloremque.
                                    </div>
                                    <div className="restaurant-info">
                                        <div className="info-row">
                                            {address}
                                        </div>
                                        <div className="info-row">
                                            {address ? 
                                                <a target="_blank" href={`https://www.google.com.ua/maps/place/${address.split(" ").join("+").split("/").join(",")}`}>show on map</a>
                                            :null}
                                        </div>
                                    </div>
                                </div>

                                <div className="restaurant-menu">
                                    <div className="restaurant-menu-title">Menu</div>
                                    {meals ? meals.map((item, index)=>{
                                        return <Dish key={index} dish={item} index={index} />
                                    }):null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
                )
            }}
        </Consumer>
    )
  }
}

export default Restaurant
