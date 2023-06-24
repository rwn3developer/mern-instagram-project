import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { LoginContext } from "../context/loginContext";


const SignIn = () => {

    const {setUserLogin} = useContext(LoginContext);

    const navigate = useNavigate();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

     //toast notyfy functionality
     const notifyA = (msg) => toast.error(msg);
     const notifyB = (msg) => toast.success(msg);

     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const postData = () => {
        //checking email
        if(!emailRegex.test(email)){
            notifyA("Invalid email");
            return false;
        }
       
        //sending data to server
        fetch("http://localhost:9000/signin",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                email : email,
                password : password
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
                notifyA(data.error);
            }else{
                notifyB("Signed In Successfully");
                localStorage.setItem('jwt',data.token);
                setUserLogin(true);
                navigate("/");
            }
            console.log(data)
        });
    }


    return (
        <center>
            <div className="signUp">
                    <div className="form-container">
                        <div className='form-content'>
                            <div className='form'>
                                <h2 style={{margin : 0}}>Instagram</h2>
                                <p className="loginPara">
                                    Sign up to see photos and videos from your friends
                                </p>
                                    <div>
                                        <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder="enter your email"/>
                                    </div>
                                    <div>
                                        <input type="text" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="enter your password"/>
                                    </div>
                                <input type="submit" onClick={ () => postData() } id="submit-btn" value="Sign Up"/>        
                            </div>
                            <div className='form2'>
                                        Do you have an account ? 
                                        <Link to='/signup'>
                                            <span style={{color : 'blue',cursor : 'pointer'}}>Sign Up</span>
                                        </Link>
                                        
                            </div>
                        </div>
                    </div>
                </div>
        </center>
        
    )
}

export default SignIn;