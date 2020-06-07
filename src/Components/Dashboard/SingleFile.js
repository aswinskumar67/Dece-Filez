import React from 'react';
import Axios from 'axios';
import Web3 from 'web3';
import {ContractABI} from '../../Contract/contract.js'

let web3 = '';
let defaultaccount =''
let RemixContract =''
  
  const loadWeb3 = async () => {
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

  const loadBlockchainData =  async () => {
    web3 = window.web3
    RemixContract = new web3.eth.Contract(
        ContractABI,
        "0x677BB4A98566ab3e12E7178A0C06Ae3A3988A2A7"
      );
    // Load account
    const accounts = await web3.eth.getAccounts();
    defaultaccount = accounts[0];
    console.log(defaultaccount)

  }
  loadWeb3().then(() => { loadBlockchainData()})

class SingleFile extends React.Component{
    constructor(props){
        super(props)
        this.state={file:{name:'',desc:'',price:'',hash:'',owner:''}};
        this.handleclick =this.handleclick.bind(this);
      
    }
    componentWillMount(){
        
        
        Axios.get(`http://localhost:8080/myfiles/${this.props.match.params.id}`,{withCredentials:true}).then((res) =>
        {
            this.setState({file:res.data})
            
            })
        }
    async handleclick() {
        if (window.confirm("Do you want to send")){
             console.log("You pressed OK!")
             console.log(this.state.file.price)
             RemixContract.methods
             .sendmoney(this.state.file.owner)
             .send({from: defaultaccount , value : 1000000000000000000, gas : 210000})
             .then(() => { console.log("success") })
             .then(()=> {
                 if(window.confirm("Confirm")){
                    RemixContract.methods
                    .confirm(this.state.file.owner)
                    .send({from: defaultaccount,gas: 210000 })
                 }
             }
             )
          } else {
            console.log("You pressed Cancel!")
          }

    }

        render(){
            return(

                <div className="singlefile">
                <div >
                    <h2 className="filename">File Name : {this.state.file.name}</h2>
                </div>
                <div>
                    <p  className="filedesc">File Desc : {this.state.file.desc}</p>
                </div>
                <div >
                    <h3 className="fileowner">Owner : {this.state.file.owner}</h3>
                </div>
                <div >
                    <h3 className="fileprice">Price : {this.state.file.price}</h3>
                 </div>
                 <div >
                    <h3 className="filehash">Verify hash : {this.state.file.hash}</h3>
                 </div>
                 <div >
                        <button onClick={this.handleclick} >buy</button>
                     </div>
                 </div>
            )
        }
}

export default SingleFile;