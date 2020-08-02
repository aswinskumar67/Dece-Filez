import React, { Component } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import './InputField.css';

class InputField extends Component {
    constructor(props){
		
		super(props);
			this.state= {
					email:'',pass:'',ethadd:'',toggle:false,link:this.props.link
			};
			this.handleChange = this.handleChange.bind(this);
			this.loginSubmit = this.loginSubmit.bind(this);
			this.singupSubmit = this.singupSubmit.bind(this);
		
	}
   
        async componentDidMount() {
            // Detect Metamask
            
      
            const metamaskInstalled = typeof window.web3 !== 'undefined'
            this.setState({ metamaskInstalled })
            if(metamaskInstalled) {
              await this.loadWeb3()
              await this.loadBlockchainData() 
            }
          }  
        componentDidUpdate(prevProps) {
            if(prevProps.link !== this.props.link) {
              this.setState({link: this.props.link});
            }
          }
          handleChange(event) {
            this.setState({[event.target.name]:event.target.value});
          }
        
          async loadWeb3() {
            if (window.ethereum) {
              window.web3 = new Web3(window.ethereum)
              await window.ethereum.enable()
            }
            else if (window.web3) {
              window.web3 = new Web3(window.web3.currentProvider)
            }
            else {
              // DO NOTHING...
            }
          }
        
          async loadBlockchainData() {
            const web3 = window.web3
            // Load account
            const accounts = await web3.eth.getAccounts()
            this.setState({ ethadd: accounts[0] })
          }
          
         ToggleButton(){
            this.setState((currentState) => ({
                toggle: !currentState.toggle, 
        }));
        }
          async loginSubmit(e){
              e.preventDefault();
              const user = {
                email : this.state.email ,
                pass : this.state.pass,
                ethadd : this.state.ethadd
              }
              console.log(user)
              axios.post("https://localhost:8080/user/register/login",user,{ withCredentials: true })
              .then((res) =>
              {
                
                if(res.status === 200) {
                    const { history } = this.props;
                    history.push("/Dashboard/Browse-files")
                } 	}  )
              }
          
          async singupSubmit(e){
              e.preventDefault();
              const user = {
                email : this.state.email ,
                pass : this.state.pass,
                ethadd : this.state.ethadd
              }
              console.log(user);
              axios.post("https://localhost:8080/user/register",user)
              .then((res) =>
              {
                console.log(res.data)
                }
              )
          }
          render() {
        
        return (
            <div>
                {(this.state.link==='LOGIN') && 
                <div>
                    <form>
                        <div className="InputGap">
                            <div className="InputParentDiv">
                            <input classname="InputWrapper2" style={{height:"2.25em",borderRadius:"20px" , border:"none",padding:"10px"}}
                            type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                            </div>
                            <div className="InputParentDiv">
                            <input classname="InputWrapper" style={{height:"2.25em",borderRadius:"20px" , border:"none",padding:"10px"}}
                             type="password" name="pass" value={this.state.pass} onChange={this.handleChange} placeholder="pass"/>
                            </div>
                            <div className="InputParentDiv">
                            <input classname="InputWrapper" style={{height:"2.25em",borderRadius:"20px" , border:"none",padding:"10px"}}
                              type="text" value={this.state.ethadd} readonly="true"/>
                            </div>
                            <div className="HeadingWrapper">
                            <input type="submit" className="LoginSignupButton" onClick={this.loginSubmit}  value={this.props.link}/>
                            </div>
                        </div>
                     </form>
                </div>
                 }
                 {(this.state.link==='SIGNUP') && 
                <div>
                    <form>
                        <div className="InputGap">
                        <div className="InputParentDiv">
                            <input classname="InputWrapper2" style={{height:"2.25em",width:"20em",borderRadius:"20px" , border:"none",padding:"10px"}}
                            type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                            </div>
                            <div className="InputParentDiv">
                            <input classname="InputWrapper" style={{height:"2.25em",borderRadius:"20px" , border:"none",padding:"10px"}}
                             type="password" name="pass" onChange={this.handleChange} value={this.state.pass} placeholder="pass"/>
                            </div>
                            <div className="InputParentDiv">
                            <input classname="InputWrapper" style={{height:"2.25em",borderRadius:"20px" , border:"none",padding:"10px"}}
                              type="text" value={this.state.ethadd} readonly="true"/>
                            </div>
                            <div className="HeadingWrapper">
                                <input type="submit" className="LoginSignupButton" onClick={this.singupSubmit}  value={this.props.link}/>
                        </div>
                        </div>
                     </form>
                </div>
                 }
            </div>
        );
    }
}

export default InputField;