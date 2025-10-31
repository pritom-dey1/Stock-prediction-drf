import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#ededf2] flex justify-between items-center p-4'>
        <div>
            <h2 className='text-[24px]  font-bold text-blue-800'>STOCK PREDICTION</h2>
        </div>
        <div className='flex gap-3'>
            <button className='bg-blue-800 rounded-[5px] px-5 text-[20px] text-white py-1'>
                LOGIN
            </button>
            <button className='bg-blue-800 rounded-[5px] px-5 text-[20px] text-white py-1'>
                REGISTER
            </button>
        </div>
    </div>
  )
}

export default Navbar