import React from 'react';
import './Dashboard.css';
import Files from './Files.js';
class Dashboard extends React.Component{
    render(){
        return(
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
                        <a href="/Upload-Files"><h1>Upload Files</h1></a>
                    </div>

                </div>
            
        
          
        )
    }
}

export default Dashboard;