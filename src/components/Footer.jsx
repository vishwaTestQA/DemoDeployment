import React from 'react'
import { BiHomeAlt, BiHomeCircle } from 'react-icons/bi'
import { CgHomeScreen } from 'react-icons/cg'
import { FaHome } from 'react-icons/fa'
import { HiCalendarDateRange } from 'react-icons/hi2'
import { PiCalendarDuotone } from 'react-icons/pi'

const Footer = () => {
  return (
    <footer className='activity-footer'>
       <div className='icon-background'> 
      <FaHome size={25}></FaHome>
      </div>
      <div className='icon-background'>
      <HiCalendarDateRange size={25}></HiCalendarDateRange>
      </div>
    </footer>
  )
}

export default Footer
