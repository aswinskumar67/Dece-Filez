import React from 'react';
import './Login.css';
import Web3 from 'web3';
import axios from 'axios';


class Input extends React.Component{

	constructor(props){
		
		super(props);
			this.state= {
					email:'',pass:'',ethadd:'',toggle:false
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
    
	render(){
		
		return(
				<div className="loginwrapper">
					<div className ="loginbox">
						<div className="toggle">
						
							<div><button onClick={ () => this.ToggleButton() }>
                				  Login
                				</button></div>
							<div><button onClick={ () => this.ToggleButton() }>
                				  Signup
                				</button></div>
						</div>
						<div >
						 {!this.state.toggle && <div className="loginformwrapper">
							<form onSubmit={this.loginSubmit}>
								<div>
									<label className="loginlabel">
									Email:
								</label>
								<input className="logininput" name="email" type="text" value={this.state.name} onChange={this.handleChange}/>
								</div>
								<div>
									<label className="loginlabel">
									Password:
								</label>
								<input className="logininput" name="pass" type="password" value={this.state.pass} onChange={this.handleChange}/>
								</div>
								<div>
									<label className="loginlabel">
									Eth:Address
								</label>
								<input className="logininput" name="ethadd" type="text" value={this.state.ethadd} readOnly="readonly" onChange={this.handleChange}/>
								</div>
								<div>
								
								<input className="loginbutton" type="submit" value="login"/>
								</div>
								
								
								

							</form>

						</div>}
						 {this.state.toggle && <div className="loginformwrapper">
							<form onSubmit={this.singupSubmit}>
								<div>
									<label className="loginlabel">
									Email:
								</label>
								<input className="logininput" name="email" type="text" value={this.state.name} onChange={this.handleChange}/>
								</div>
								<div>
									<label className="loginlabel">
									Password:
								</label>
								<input className="logininput" name="pass" type="password" value={this.state.pass} onChange={this.handleChange}/>
								</div>
								<div>
									<label className="loginlabel">
									Eth:Address
								</label>
								<input className="logininput" name="ethadd" type="text" value={this.state.ethadd} readOnly="readonly" onChange={this.handleChange}/>
								</div>
								<div>
								
								<input className="loginbutton" type="submit" value="Register"/>
								</div>
								
								
								

							</form>

						</div>}
						</div>
						
						
					</div>
				</div>
		)

		
	}
}

export default Input;