import React from 'react';
import './Files.css';

class Files extends React.Component{
    render(){
        return(
            <div>
                            <div className="files">
                            <div className="singlefile">
                                <div className="filename">
                                    <h2>File one</h2>
                                </div>
                                <div className="filedescription">
                                    <p>File desc is the way the files are described on the onternet</p>
                                </div>
                                <div className="fileowner">
                                    <h3>@ownername</h3>
                                </div>
                                <div className="fileprice">
                                    <h3>Price</h3>
                            </div>
                        
                            </div>
                            <div className="singlefile">
                                <div className="filename">
                                    <h2>File one</h2>
                                </div>
                                <div className="filedescription">
                                    <p>File desc</p>
                                </div>
                                <div className="fileowner">
                                    <h3>@ownername</h3>
                                </div>
                                <div className="fileprice">
                                    <h3>Price</h3>
                                </div>
                        
                            </div>
                        
                        </div>
                    </div>
        )
    }
}

export default Files;
