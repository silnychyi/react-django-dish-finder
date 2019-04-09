import React, {Component} from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {

        case 'GET_ORDER':
            return {
                ...state,
                order: action.payload
            }

        case 'GET_NEXT_PAGE':
            return {
                ...state,
                nextPage: action.payload
            }

        case 'GET_KEYWORD':
            return {
                ...state,
                keyword: action.payload
            }

        case 'GET_MEALS':
            return {
                ...state,
                meals: action.payload
            }

        case 'GET_COUNT':
            return {
                ...state,
                mealsCount: action.payload
            }
        
        case 'GET_RESTAURANT':
            return {
                ...state,
                restaurant: action.payload
            }

        default: return state
    }
}



export class Provider extends Component {
    
    state = {
        restaurant: "",
        meals: [],
        mealsCount: 0,
        page: 1,
        keyword: "",
        nextPage: "",
        order: "",

        dispatch: action => {
            this.setState(state => reducer(state, action))
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:8000/api/ms/")
        .then(response => response.json())
        .then(data => {
            this.setState({meals: data.results});
            this.setState({mealsCount: data.count});
            this.setState({nextPage: data.next});
        })
    }

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
    

}

export const Consumer = Context.Consumer