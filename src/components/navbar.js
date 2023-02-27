import React from 'react'
import { IoMdNotifications } from "react-icons/io"
import { AiOutlineMessage } from "react-icons/ai"
import { AiOutlineUserAdd } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import { FaSignOutAlt } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';


function Navbar() {

    const navigate = useNavigate();

    return (
        <div className='container__screen__navbar'>
            <input placeholder='search something...' className='container__screen__navbar__search'>
            </input>
            <div className='button__group'>
                <a className='container__screen__navbar__button'>
                    <IoMdNotifications className='icon' />
                </a>
                <a className='container__screen__navbar__button'>
                    <AiOutlineMessage className='icon' />
                </a>
                <a className='container__screen__navbar__button' onClick={() => navigate('/sub-admin')}>
                    <AiOutlineUserAdd className='icon' />
                </a>
                <a className='container__screen__navbar__button' onClick={() => navigate('/')}>
                    <FaSignOutAlt className='icon' />
                </a>


            </div>
        </div>
    )
}

export default Navbar
