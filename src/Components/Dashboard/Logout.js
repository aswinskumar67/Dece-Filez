import React, { Component } from 'react';
import Axios from 'axios';


class Logout extends Component {
    constructor(props){
        super(props)
        this.HandleClick = this.HandleClick.bind(this)
    }
    async HandleClick () {
        Axios.get("https://localhost:8080/user/logout",{withCredentials:true}).then((res) => {
            console.log("hii")
            window.location = "https://localhost:3000/"
            
        }
        )
    };
    render() {
       
        return (
            <div style={{display:"grid" , alignContent:"center" , justifyContent:"center" }}>
                <h3  onClick={this.HandleClick}>Logout</h3>
            </div>
        );
    }
}

export default Logout;