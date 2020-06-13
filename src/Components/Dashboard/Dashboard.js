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
       
            
        
        Axios.get("https://localhost:8080/user",{withCredentials:true}).then((res,err) => {
            if(res.status === 200) {
                this.setState({loading : false })

                }
            }
           
    ).catch((err)=> {
        alert("Login to Continue")
        window.location="https://localhost:3000/"})
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
                            <a href="./Browse-files"><h3 className="Optionstext">Browse Files</h3></a>
                            <a href="/My-files"><h3 className="Optionstext">Seller Mode</h3></a>
                        </div>
                    </div>
                    
                </div>
                <div className="second">
                     <div><h1 className="Allfiles">All Files</h1></div>
                       <div> <Files/> </div>
                </div>
                <div className="third">
                    <div className="thirdscroll">
                    <div><Logout/></div>
                   <div> <a href="/Upload-Files"><div className="Upload"><h1 className="Uploadtext">Upload Files</h1></div></a></div>
                   </div>
                </div>
                </div>
    }

            </div>
                
            
        
          
        )
    }
}

export default Dashboard;