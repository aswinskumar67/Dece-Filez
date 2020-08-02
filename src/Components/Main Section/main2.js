import React, { Component } from 'react';
import Navbar from './navbar';
import './main2.css'
class main2 extends Component {
    render() {
        return (
            <div className="MainPageWrapper">
                <div><Navbar link="home"/></div>
                <div className="MainContentWrapper">
                <div className="MainLeftWrapper">
                    <div className="MainLeftAlign" >
                        
                        <div className="MainCaption">BUY / SELL FILES SECURELY</div>
                        <div className="MainTitle">A DECENTRALIZED <br/>
                           P2P<span className="MainTitleColor">  FILE SYSTEM</span> </div>
                        <button className="MainOptionsButton BoundingBox2" onClick={()=>window.location="./login2"}>GET STARTED</button>
                    </div>
                </div>
                <div className="MainRightWrapper">
                    <div className="MainImage"></div>
                </div>

                </div>
                <div className="MainBottomWrapper">
                    <div className="MainBottom">
                        <div className="BottomText">IPFS</div>
                        <div className="BottomSep"></div>
                        <div className="BottomText">ETHEREUM</div>
                        <div className="BottomSep"></div>
                        <div className="BottomText">BLOCKCHAIN</div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default main2;