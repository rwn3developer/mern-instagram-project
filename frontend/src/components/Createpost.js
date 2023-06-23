import { useEffect, useState } from 'react';
import './Createpost.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Createpost = () => {

        const [body,setBody] = useState("");
        const [image,setImage] = useState(""); 
        const [url,setUrl] = useState("");
        const navigate = useNavigate();

        //toast notyfy functionality
        const notifyA = (msg) => toast.error(msg);
        const notifyB = (msg) => toast.success(msg);

        useEffect(()=>{
            if(url){
                //saving post to mongodb
                fetch("http://localhost:9000/createPost",{
                    method : "post",
                    headers : {
                        "Content-Type" : "application/json",
                        "Authorization" : "Bearer " + localStorage.getItem('jwt')
                    },
                    body : JSON.stringify({
                        body,
                        pic : url,
                    })
                }).then(res => res.json())
                .then(data => {if(data.error){
                    notifyA(data.error)
                }else{
                    notifyB("Successfully Posted");
                    navigate('/');
                }})
                .catch(err => console.log(err))
            }
        },[url]);


        //posting image to cloudinary
        const postDetais = () => {
            const data = new FormData();
            data.append('file',image);
            data.append('upload_preset','insta-clone');
            data.append('cloud_name','coderking');
            fetch("https://api.cloudinary.com/v1_1/coderking/image/upload",{
                method : "post",
                body : data
            }).then(res => res.json())
            .then(data =>  setUrl(data.url),console.log(data))
            .catch(err => console.log(err));  
        }

    const loadfile = (event) => {
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory 
        }
    }

    return (
        <>
            <div className="createPost">
                {/* header */}
                <div className="post-header">
                    <h4 style={{margin:"3px auto"}}>Create New Post</h4>
                    <button id="post-btn" onClick={ ()=> postDetais() } >Share</button>
                </div>
                {/* image-priview */}
                <div className="main-div">
                    <img src='https://cdn-icons-png.flaticon.com/512/1160/1160358.png' id='output'/>
                    <input type="file" accept="image/*" onChange={ (event) => {loadfile(event); setImage(event.target.files[0])  }}/>
                </div>
                {/* details */}
                <div className="details">
                    <div className="card-header">
                        <div className="card-pic">
                            <img src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/> 
                        </div>
                        <h5>jay mataji</h5>
                    </div>
                    <textarea value={body} onChange={ (e) => setBody(e.target.value) } type="text" placeholder="Write a caption.....">
                        
                    </textarea>
                </div>
            </div>
        </>
    )
}

export default Createpost;