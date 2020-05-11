import React from 'react';
import './Upload.css';
import Web3 from 'web3';


class Upload extends React.Component{
    constructor(props) {
        super(props);
        this.state = {owner: '',desc:'',price:'',account:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      async componentWillMount() {
        // Detect Metamask
        const metamaskInstalled = typeof window.web3 !== 'undefined'
        this.setState({ metamaskInstalled })
        if(metamaskInstalled) {
          await this.loadWeb3()
          await this.loadBlockchainData()
        }
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
        this.setState({ account: accounts[0] })
      }
    
      handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.owner + this.state.desc + this.state.price);
        event.preventDefault();
      }
    
      render() {
        return (
         <div className="formwrapper">
             <form  onSubmit={this.handleSubmit}>
               <div className="form1">
                  <div>
                     <label>
                             Name:
                            <input className="input1"name="owner" type="text" value={this.state.owner} onChange={this.handleChange} />
                    </label>
                  </div>
                  <div>
                          <label>
                               Desc:
                               <input className="input1" name="desc" type="text" value={this.state.desc} onChange={this.handleChange} />
                        </label>
                  </div>
                  <div>
                      <label>
                          Price:
                          <input className="input1" name="price" type="text" value={this.state.price} onChange={this.handleChange} />
                      </label>
                   </div>
                   <div>
                      <label>
                          Eth Adrress:
                          <input className="input1" name="account" type="text" value={this.state.account} readOnly="readonly" onChange={this.handleChange}  />
                      </label>
                   </div>
                  <div>
                      <input type="submit" value="Submit" />
                  </div>
               </div>
            
            
                     
            
          </form>
          </div>
        );
       
         
      }
}

export default Upload;