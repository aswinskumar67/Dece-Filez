import React from 'react';
import './Dashboard.css';
import Files from './Files.js';
import Logout from './Logout.js';
import Axios from 'axios';
class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state ={loading:true}
    }
    componentDidMount() {
       
            
        
        Axios.get("http://localhost:8080/user",{withCredentials:true}).then((res,err) => {
            if(res.status === 200) {
                this.setState({loading : false })

                }
            }
           
    ).catch((err)=> {
        alert("Login to Continue")
        window.location="http://localhost:3000/"})
    }
    render(){
        const {loading} = this.state;
        return(
            
                 <div >
                     {loading? <h1>Loading</h1> :
                     <div className="wrapper">
                <div className="first">
                    <div className="First-wrapper">
                        <div className="App-name1">
                            <h1>DECE FILES</h1>
                        </div>
                        <div className="Options">
                            <a href="/Browse"><h1>Browse Files</h1></a>
                            <a href="/My-files"><h1>Seller Mode</h1></a>
                        </div>
                    </div>
                    
                </div>
                <div className="second">
                        <Files/>
                </div>
                <div className="third">
                    <Logout/>
                    <a href="/Upload-Files"><h1>Upload Files</h1></a>
                </div>
                </div>
    }

            </div>
                
            
        
          
        )
    }
}

export default Dashboard;