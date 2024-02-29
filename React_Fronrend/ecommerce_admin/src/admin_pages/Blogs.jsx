import React from 'react';
import { useState,useEffect,useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoditEditor from 'jodit-react';

function Blogs() {
    const login=localStorage.getItem('login');
    const[loginenable,setLoginenable]=useState('');
    const editor = useRef(null);
    const [content, setContent] = useState('');
    useEffect(()=>{
    setLoginenable(login)
    },[loginenable])
    console.log(login)

    const [catName,setCatname]=useState("");
    const [catStock,setCatstock]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
       
            axios.post("http://127.0.0.1:1234/api/category",{catName:catName,catStock:catStock})
               .then((Response)=>{
                   console.log(Response.data);
                   setCatname(" ");
                   setCatstock(" ");
                   toast.success("Insert Successfully!",{
                    position: "top-center",
                   });
               })  
       }
    if(login){
    return ( 
        <>
            <div class="container-fluid">
                
                <div className="row">
                    <div className="col-xl-12 col-md-12">
                    <div className="card  mb-4 ">
                        <div className="card-footer"> 
                        <span id="alert_contain"></span>    
                        <h5 className="basic_font">Add Blogs</h5> 
                        </div>
                        <div className="card-body">
                        <form >
                                <div className="mb-3 mt-1">
                                <label for="category_name" className="form-label basic_font">Blog Title :</label>
                                <input type="text" className="form-control"  placeholder="Enter your Blog title" onChange={(e)=>{setCatname(e.target.value)}}/>
                                </div>
                               
                                <div className="mb-3 mt-1">
                                <label for="comment" className="form-label basic_font">Blog category :</label>
                                <input type="number" className="form-control"  placeholder="Enter your Blog Category " onChange={(e)=>{setCatstock(e.target.value)}}/>
                                
                                </div>
                                <div className="mb-3 mt-1">
                                <label for="comment" className="form-label basic_font">Write your Blog: :</label>
                                <JoditEditor 
                                ref={editor}
                                value={content}
                                onChange={newcontent=>setContent(newcontent)}
                                />
                                </div>
                                
                                <input type="button" className="btn btn-primary"  value="ADD" onClick={handleSubmit}/>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <ToastContainer />
        </>
     );
    }
    else{
        return(
          <>
            <div className="container mx-4 mt-2 ">
              <div className="row">
              <div class="alert alert-danger">
                <strong>Permission denied!</strong> Please Login first.
              </div>
    
              </div>
            {/* <h1>Please Login first</h1> */}
            </div>
          </>
    
        )
        
      }
}

export default Blogs;