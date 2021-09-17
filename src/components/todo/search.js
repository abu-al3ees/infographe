import React from 'react'
import Image from './large_pharmacyleaf.png'
import './search.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

function search() {
    return (
        <div className='seach_body'>
            <div className='logo'>
            
            <img src={Image}/>

            </div>
            <div className='search_input'>
             <input type='text' placeholder='search..'/>
             <button className='search_btn'>search</button><br/>
             <ul className='nav_bar'>
                 <li>Home +</li>
                 <li>Shop +</li>
                 <li>Page +</li>
                 <li>Blog +</li>
                 <li>On sale +</li>
                 <li>Contact +</li>
             </ul>



            </div>
            <div >
                <div className='login'>
                <button className='log_btn'>LOGIN</button>/
                <button className='sin_btn'>SIGNUP</button>
               <span className='icon'><FavoriteBorderIcon/></span> 
               <span className='count'><LocalMallOutlinedIcon/> <span className='counter' > 0</span> </span>
               <span className='money'>0.00$</span>
               </div>
            </div>
            
        </div>
    )
}

export default search
