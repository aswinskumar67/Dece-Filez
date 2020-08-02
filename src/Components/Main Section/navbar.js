import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="MainHeaderWrapper">
                    <div className="MainHeader">
                        <div className="MainLogoWrap">
                            <div className="MainLogo"> DECEFILES</div>
                        </div>
                        
                            {(this.props.link==="home") && <div className="MainOptionsWrapper">
                                 
                            <div className="OptionsWrap" ><div className="MainOptions">HOME</div></div>
                            <div className="OptionsWrap"><div className="MainOptions">LEARN HOW</div></div>
                            <div className="OptionsWrap">
                                
                                    <button className="MainOptionsButton" onClick={()=>window.location="./login2"}>LOGIN</button>
                                
                            </div>
                        </div>
                     }
                      {(this.props.link!=="home") && <div className="MainOptionsWrapper">
                                 
                                 
                                 <div className="OptionsWrap">
                                 <button className="MainOptionsButton" onClick={()=>window.location="./New-Main"}>HOME</button>
                                 </div>
                             </div>
                          }
                    </div>
        
                </div>
        );
    }
}

export default Navbar;