import './header.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import home from '../../assets/icons/home.svg'
import person from '../../assets/icons/person.svg'
import setting from '../../assets/icons/settings.svg'


const Header = (props) => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='mainHeader'>
      <header className='flex-row-wrap justify-between p-0-1 m-0 align-center'>
        <h1 className="logo">{props.logo}</h1>

        <div className='myAcc flex-row-nowrap align-center justify-center'>

          <Link to={'/'} className="iconLink  flex-row-nowrap align-center justify-center ">
            <img src={home} alt="" />
          </Link>
          <Link className='iconLink  flex-row-nowrap align-center justify-center '>
            <img src={person} alt="" />
          </Link>
          <Link className="iconLink  flex-row-nowrap align-center justify-center ">
            <img src={setting} alt="" />
          </Link>
        </div>
      </header>

    </div>
  )
}

export default Header
