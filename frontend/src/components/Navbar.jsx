import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
       <div className="navbar">
            <div>
                <h2>Instagram</h2>
            </div>
            <ul className='nav-menu'>
                <Link to='/signup'>
                    <li>SignUp</li>
                </Link>
                <Link to='/signin'>
                    <li>SignIn</li>
                </Link>
                    
                <Link to='/profile'>
                    <li>Profile</li>
                </Link> 

                <Link to='/createPost'>
                    <li>Crete Post</li>
                </Link>     
                    
            </ul>
       </div>

    )
}
export default Navbar;