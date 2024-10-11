import ReactEats from '../utils/ReactEats.jpg'
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const Header=()=>{
    const [btnName,setBtnName]=useState('Login');
    const onlineStatus=useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //subscribing to our store using a selector
    const cartItems = useSelector((store)=>store.cart.items)
    console.log("cart items",cartItems)

    return (
    <div className="flex justify-between bg-pink-200 shadow-lg">
        <div className="w-32">
            <Link to='/'>
                <img src={ReactEats} alt='Logo'/>   
            </Link>
        </div>
        <div className='flex items-center'>
            <ul className='flex p-4 m-4'>
                <li className='p-4 font-bold'>
                    Online Status : {onlineStatus ? "🟢" : "🔴"}
                </li>
                <li className='p-4 font-bold'>
                    <Link to='/about'>About</Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li className='p-4 font-bold'>
                    <Link to='/grocery'>Grocery</Link>
                </li>
                <li className='p-4 font-bold text-xl'>
                    <Link to='/cart'>Cart-({cartItems.length} items)</Link>
                </li>
                <button className='login p-4 font-bold' onClick={()=>{
                    if(btnName==='Login'){
                        setBtnName('Logout');
                    }
                    else{
                        setBtnName('Login');
                    }}}>{btnName}</button>
                <li className='p-4 font-bold' font-bold>
                    {loggedInUser}
                </li>
            </ul>
        </div>
    </div>
    )
};

export default Header;