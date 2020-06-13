import React from 'react';
import './Upload.css';
import Web3 from 'web3';
import ipfs from './Ipfs.js';
import axios from 'axios';


class Upload extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name:'',desc:'',price:'',owner:'',hash:'',buffer:'',fileext:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.captureFile = this.captureFile.bind(this);
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
        this.setState({ owner: accounts[0] })
      }
    
      handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
      }
    
      handleSubmit = async (event) => {
      
        event.preventDefault();
        await ipfs.add(this.state.buffer,(err,res)=>{
          console.log("IPFS working...")
          if(err){
            alert("IPFS giving error")
            console.log("Error in IPFS: ",err)
          }
          else{
            var hash1 = res[0].hash
            console.log(hash1)
            this.setState({ hash:hash1})
            console.log(this.state.Hash)
            const newfile = { name : this.state.name,
              desc : this.state.name,
              price : this.state.price,
              hash : this.state.hash,
              owner: this.state.owner } ;
              console.log(newfile)
              axios.post("https://localhost:8080/user/upload",newfile)
             .then(res => {console.log(res.data)
             window.location ="https://localhost:3000/Dashboard/Browse-files"})
          }
        })
        
          
      
      }

      captureFile = async (event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        const fileext = await file.name.split('.').pop()
        this.setState({fileext:fileext})
        console.log(this.state.fileext)
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
      
     convertToBuffer = async(reader) => {
      //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
        console.log(buffer)
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };
             
    
      render() {
        return (
         <div className="formwrapper">
             <form  onSubmit={this.handleSubmit}>
        <h1>s</h1>
               <div className="form1">
               <div>
                  
                             
                            <input  type="file" onChange={this.captureFile} />
                   
                  </div>
                  <div>
                     <label>
                             Name:
                            <input className="input1"name="name" type="text" value={this.state.name} onChange={this.handleChange} />
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
                          <input className="input1" name="owner" type="text" value={this.state.owner} readOnly="readonly" onChange={this.handleChange}  />
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