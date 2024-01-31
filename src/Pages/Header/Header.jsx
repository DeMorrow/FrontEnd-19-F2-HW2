import React from 'react'
import HeaderComponent from '../../Components/HeaderComponent.jsx/HeaderComponent'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
    <HeaderComponent/>
        </header>
        <Outlet />
    </>
  )
}

export default Header