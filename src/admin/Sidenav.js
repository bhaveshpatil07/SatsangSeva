import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../redux/AuthContext';
import '../Csss/Sidenav.css';
import Logout from '@mui/icons-material/LogoutTwoTone';
import Close from '@mui/icons-material/CloseTwoTone';
const SideNavbar = ({setAdmin}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => setIsOpen(!isOpen);
    const closeNav = () => setIsOpen(false);
    const logout = () => {setAdmin("LogOut"); closeNav();};

    return (
        <div style={{zIndex: "10000"}}>
            <div className={`side-navbar ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleNav}><Close fontSize='large' /></button>
                <nav className='mt-4'>
                    <Link to="" onClick={closeNav}>Statistics</Link>
                    {/* <Link to="allproduct" onClick={closeNav}>Booking</Link> */}
                    <Link to="addproduct" onClick={closeNav}>Total User</Link>
                    <Link to="orders" onClick={closeNav}>Events</Link>
                    <Link to="approve" onClick={closeNav}>Approve</Link>
                    <Link to="blog" onClick={closeNav}>Blogs</Link>
                    <Link to={"/admin"} onClick={logout} >
                        LogOut 
                        <Logout className="ml-2"/>
                    </Link>
                    {/* <button onClick={logout} className="logout-btn">Logout</button>  */}
                    {/* <Link to="coupon" onClick={closeNav}>Coupon</Link>
                    <Link to="categorie" onClick={closeNav}>Categorie</Link>
                    <Link to="brands" onClick={closeNav}>Brands</Link>
                    <Link to="orderdetails" onClick={closeNav}>OrderDetails</Link> */}
                </nav>
            </div>
            <button className="open-btn" onClick={toggleNav}>☰</button>
        </div>
    );
};

export default SideNavbar;
