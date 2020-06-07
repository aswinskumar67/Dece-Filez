import React, { Component } from 'react';
import Axios from 'axios';


class Logout extends Component {
    constructor(props){
        super(props)
        this.HandleClick = this.HandleClick.bind(this)
    }
    async HandleClick () {
        Axios.get("http://localhost:8080/user/logout",{withCredentials:true}).then((res) => {
            console.log("hii")
            window.location = "http://localhost:3000/"
            
        }
        )
    };
    render() {
       
        return (
            <div>
                <h3 onClick={this.HandleClick}>Logout</h3>
            </div>
        );
    }
}

export default Logout;