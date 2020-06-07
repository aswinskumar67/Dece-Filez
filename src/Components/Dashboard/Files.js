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
        axios.get("http://localhost:8080/myfiles",{withCredentials:true}).then((res) =>{
            this.setState({files : res.data});
            console.log(this.state.files)
            

        })
    }
    render(){
        return(
            <div>
                {console.log(this.state.files)}
                {this.state.files.map((file) =>
                
                <div className="files" key={file.name}>
                <div className="singlefile">
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
                        <h3 className="fileprice">Price : {file.price}</h3>
                     </div>
                     <div >
                        <h3 className="filehash">Verify hash : {file.hash}</h3>
                     </div>
                     <div >
                        <button ><Link to={`/Dashboard/${file._id}`}>buy</Link></button>
                     </div>
                </div>
               
            
            </div>
                )};
                            
         </div>
        )
    }
}

export default Files;
