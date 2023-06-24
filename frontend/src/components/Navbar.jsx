import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({login}) => {

    const loginStatus = () => {
        const token = localStorage.getItem('jwt');
        if(login || token){
            return [
                <>
                    <Link to='/profile'>
                    <li>Profile</li>
                    </Link> 

                    <Link to='/createPost'>
                        <li>Crete Post</li>
                    </Link>   
                </>
            ]
        }else{
            return [
                <>
                    <Link to='/signup'>
                        <li>SignUp</li>
                    </Link>
                    <Link to='/signin'>
                        <li>SignIn</li>
                    </Link>
                </>
            ]
        }
    }

    return (
       <div className="navbar">
            <div>
                <h2>Instagram</h2>
            </div>
            <ul className='nav-menu'>
                
                  {loginStatus()}  
                  
                    
            </ul>
       </div>

    )
}
export default Navbar;