import React from 'react';
import Axios from 'axios';
import Web3 from 'web3';
import {ContractABI} from '../../Contract/contract.js'
import ipfs from './Ipfs.js';

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
        "0xdAf3da108f0a7dE3FC9c24919689843226A14947"
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
    componentWillUpdate(){
      window.ethereum.on('accountsChanged', function (accounts) {
        Axios.get("http://localhost:8080/user/logout",{withCredentials:true}).then((res) => {
          window.alert("Account Change Detected")
          window.location ="http://localhost:3000/Login-sign-up"
      })
        
      })

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
             RemixContract.methods
             .sendmoney(this.state.file.owner)
             .send({from: defaultaccount , value : this.state.file.price , gas : 3000000})
             .then(() => { console.log("success") })
             .then(()=> {
                 if(window.confirm("Confirm")){
                    RemixContract.methods
                    .confirm(this.state.file.owner)
                    .send({from: defaultaccount,gas: 3000000 }).then(async ()=>
                    {
                       await ipfs.cat(this.state.file.hash,(err,data) => {
                         const blob = new Blob([data])
                         const link = document.createElement('a')
                         link.href = URL.createObjectURL(blob)
                         document.body.appendChild(link)
                         link.download = this.state.file.name + '.png'
                         link.click()
                       }
                       )
                    })
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
                    <h3 className="fileprice">Price : {this.state.file.price / Math.pow(10,18)} Eth</h3>
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