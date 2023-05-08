import { Link } from 'react-router-dom';
import './SignUp.css'
import { useEffect } from 'react';
const SignUp = () => {

    const fetchData = async() => {
        const response = await fetch("http://localhost:9000/"); //data
        const data = await response.json();
        console.log(data);
    }
    useEffect(()=>{
        fetchData();
    },[]);

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
                                        <input type="text" name="name" placeholder="enter your fullname"/>
                                    </div>
                                    <div>
                                        <input type="text" name="username" placeholder="enter your username"/>
                                    </div>
                                    <div>
                                        <input type="text" name="email" placeholder="enter your email"/>
                                    </div>
                                    <div>
                                        <input type="text" name="password" placeholder="enter your password"/>
                                    </div>
                                    
                                    
                                <p className="loginPara">
                                    By signing up, you agree to out Terms, <br/> privacy policy and cookie policy
                                </p>
                                <input type="submit" id="submit-btn" value="Sign Up"/>

                                    
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