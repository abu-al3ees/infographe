import React, { useState, useContext } from 'react';
import Signin from '../auth/signin';
import Signup from '../auth/signup';
import  Image  from './large_pharmacyleaf.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import { AuthContext } from '../../context/auth';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { If, Else, Then } from 'react-if';
import './header.css'

const NavBar = () => {
  const contextType = useContext(AuthContext);
  const [signinShow, setSigninShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);
  return (
   <div>
      <div className="header">
                <p>Free shoping for all order of$99</p>


                <ul className='logo_nav'>
                    <li> <FacebookIcon/></li>
                    <li><TwitterIcon/></li>
                    <li><InstagramIcon/></li>
                    
                </ul>

            </div>
     
      <div className="seach_body">
      <div className='logo'>
            
            <img src={Image}/>

            </div>
            <div className='search_input'>
             <input type='text' placeholder='search..'/>
             <button className='search_btn'><SearchIcon/></button><br/>
             <ul className='nav_bar'>
                 <li>Home +</li>
                 <li>Shop +</li>
                 <li>Page +</li>
                 <li>Blog +</li>
                 <li>On sale +</li>
                 <li>Contact +</li>
             </ul>



            </div>
            <If condition={contextType.loggedIn}>
            <Then>
            <button className='log_btn'  onClick={contextType.logout}>
              Logout
            </button>
            </Then>
            <Else>
            <button className='log_btn' onClick={() => setSigninShow(true)}>
              SINGN IN
            </button>

            <button className='sin_btn'  onClick={() => setSignupShow(true)}>
              SINGN UP
            </button>
            </Else>
            </If>
            <div className='icon_div'>
            <span className='icon'><FavoriteBorderIcon/></span> 
               <span className='count'><LocalMallOutlinedIcon/> <span className='counter' > 0</span> </span>
               <span className='money'>0.00$</span>
               </div>
         </div>
      
      <Signin show={signinShow} onHide={() => setSigninShow(false)} />
      <Signup show={signupShow} onHide={() => setSignupShow(false)} />
</div>
  );
};

export default NavBar;