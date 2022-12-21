import React from 'react'
import Image from '../../img/logo.jpg'

const Logo = () => {
  return (
      <div>
          <div className='flex justify-center rounded-md items-center mt-2'>
              <img className='w-[150px] rounded-xl' src={Image} alt="" />
          </div>
    </div>
  )
}

export default Logo