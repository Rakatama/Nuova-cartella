import React from "react";
import {Outlet,Link} from 'react-router-dom';

class Count extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0 
        }
    }
    increment = () =>{
        this.setState({count: this.state.count + 1});
    }
    render() {
        return(
        <div>
                <button onClick={this.increment}>+</button>
                <h2>{this.state.count}</h2>
        </div>)
        };
}
    
export default Count;