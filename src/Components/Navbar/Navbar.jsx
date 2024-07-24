import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <h2 className="logo text-[25px] text-blue"><strong>Job</strong>o</h2>
      </div>

      <div className='menu flex gap-8'>
        <li className='menuList text-[#6f6f6f] hover:text-blue'>Jobs</li>
        <li className='menuList text-[#6f6f6f] hover:text-blue'>Companies</li>
        <li className='menuList text-[#6f6f6f] hover:text-blue'>About</li>
        <li className='menuList text-[#6f6f6f] hover:text-blue'>Contact</li>
        <li className='menuList text-[#6f6f6f] hover:text-blue'>Blog</li>
        <li className='menuList text-[#6f6f6f] hover:text-blue'>Login</li>
        <li className='menuList text-[#6f6f6f] hover:text-blue'>Register</li>
      </div> 
    </div>
  )
}

export default Navbar