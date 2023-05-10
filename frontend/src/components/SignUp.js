import { Link } from 'react-router-dom';
import './SignUp.css'
import { useEffect, useState } from 'react';
const SignUp = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const postData = () => {
       
        //sending data to server
        fetch("http://localhost:9000/signup",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : name,
                userName : userName,
                email : email,
                password : password
            })
        }).then(res => res.json())
        .then(data => {console.log(data)} );

    }

    return (
        <>
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
                                        <input type="text" name="name" value={name} onChange={ (e) => setName(e.target.value) } placeholder="enter your fullname"/>
                                    </div>
                                    <div>
                                        <input type="text" name="username" value={userName} onChange={ (e) => setUserName(e.target.value) }  placeholder="enter your username"/>
                                    </div>
                                    <div>
                                        <input type="text" name="email" value={email} onChange={ (e) => setEmail(e.target.value) } placeholder="enter your email"/>
                                    </div>
                                    <div>
                                        <input type="text" name="password" value={password} onChange={ (e) => setPassword(e.target.value) } placeholder="enter your password"/>
                                    </div>
                                    
                                    
                                <p className="loginPara">
                                    By signing up, you agree to out Terms, <br/> privacy policy and cookie policy
                                </p>
                                <input type="submit" onClick={ () => postData() } id="submit-btn" value="Sign Up"/>

                                    
                            </div>
                            <div className='form2'>
                                        Already have an account ? 
                                        <Link to='/signin'>
                                            <span style={{color : 'blue',cursor : 'pointer'}}>Sign In</span>
                                        </Link>
                                        
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </>
        
    )
}

export default SignUp;