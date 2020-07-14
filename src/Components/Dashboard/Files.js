import React from 'react';
import './Files.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Files extends React.Component{
    constructor(props){
        super(props)
        this.state={files:[{name:'',desc:'',price:'',hash:'',owner:'',_id:''}]};
        console.log(this.state.id)
    }
    async componentWillMount(){
        axios.get("https://localhost:8080/myfiles",{withCredentials:true}).then((res) =>{
            this.setState({files : res.data});
            console.log(this.state.files)
            

        })
    }
    render(){
        return(
             <div className="files">
            <div>
                
                {this.state.files.map((file) =>
                
               
                <div className="singlefile" key={file._id} >
                    
                    <div >
                        <h2 className="filename">File Name : {file.name}</h2>
                    </div>
                    <div>
                        <p  className="filedesc">File Desc : {file.desc}</p>
                    </div>
                    <div >
                        <h3 className="fileowner">Owner : {file.owner}</h3>
                    </div>
                    <div >
                        <h3 className="fileprice">Price : {file.price/Math.pow(10,18)} Eth</h3>
                     </div>
                    
                     <div >
                        <div className="Buybutton"><Link to={`/Dashboard/Browse-files/${file._id}`}>buy</Link></div>
                     </div>
                </div>
               
            
            
                )};
             </div>               
         </div>
        )
    }
}

export default Files;
