import React from 'react'
import '../styles/LeftMenu.css'
import { FaSpotify, FaEllipsisH } from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'

function LeftMenu() {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            
            <i><FaSpotify /></i>
            <h2>Betterfy</h2>
            <i><FaEllipsisH /></i>
        </div>
        <div className='searchBox'>
            <input type="text" placeholder='Search...'/>
            <i></i>
        </div>
    </div>
  )
}

export {LeftMenu};