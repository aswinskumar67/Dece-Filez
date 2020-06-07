import React from 'react';
import Axios from 'axios';
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
        if (window.confirm("Press a button!")) {
             console.log("You pressed OK!")
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