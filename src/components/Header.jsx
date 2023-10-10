import React from 'react';
import logo from '../images/brand_logo.png';

const Header = () => {
  return (
    <nav className='flex justify-between py-4 px-20 font-semibold text-sm uppercase'>
        <div>
            <img src={logo} alt="logo" />
        </div>

        <div>
            <ul className='flex gap-8 text-[#2E2E2E] cursor-pointer'>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>

        <div>
            <button className='bg-[#D01C28] py-1 px-4 font-semibold text-white'>Login</button>
        </div>
    </nav>
  )
}

export default Header