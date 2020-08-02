import React from 'react';
import './Login.css';
import Navbar from '../Main Section/navbar'
import './logincopy.css'
import InputField from './InputField';
class Input2 extends React.Component{

	constructor(props){
		super(props)
		this.state={link:"LOGIN"};
	}
	
	
	render(){
	
		return(
		 <div  className="MainPageWrapper">
			 <div><Navbar/></div>
			 <div>
			   {
			      (this.state.link==="LOGIN") && <div className="LoginSignupWrapper">
				   <div className="CurrentWrapper">
				   <div className="HeadingWrapper"><h1 className="LoginSignupHeading">DECEFILEZ USER?</h1></div>
				    <div><InputField link="LOGIN"/></div>
					</div>
					<div className="Line"></div>
					<div className="OtherWrapper">
						<div><div><h1  className="LoginSignupHeading" >NEW USER?</h1></div>
						<div className="OtherWrapper"><button type="button" className="LoginSignupButton"  onClick={()=>{this.setState({link:"SIGNUP"})}}>SIGNUP</button></div>
					</div>
						
					</div>	
				 </div>
				   }  
			
			{
			      (this.state.link==="SIGNUP") && <div className="LoginSignupWrapper">
					  <div className="OtherWrapper"><div><div><h1  className="LoginSignupHeading" >DECEFILEZ USER?</h1></div>
						<div className="OtherWrapper">
                          	<button type="button" className="LoginSignupButton"  onClick={()=>{this.setState({link:"LOGIN"})}}>LOGIN</button></div>
					</div></div>
					<div  className="Line"></div>
				   <div className="CurrentWrapper">
				   <div className="HeadingWrapper"><h1 className="LoginSignupHeading">NEW USER?</h1></div>
				    <div><InputField link="SIGNUP"/></div>
					</div>
					
				 </div>
				   }  
				   
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

export default Input2;