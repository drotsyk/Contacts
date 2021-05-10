import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../Button/Button'
import './Header.css'

export const Header = ({toggleAdd}) => {
  return (
    <div className="header">
      <div className="header__container header__container--space">
          <h1 className="header__title">Hello, {JSON.parse(localStorage.getItem('name')).charAt(0).toUpperCase() + JSON.parse(localStorage.getItem('name')).slice(1)}</h1>
          <div className="header__logout">
            <Link className="" to="/">LogOut</Link>
          </div> 
        </div>
        <div className="header__btn-list">
          <div className="header__btn" onClick={() => toggleAdd()}>
            <Button  text="New Contact" color="black"/>
          </div>
          <div className="header__btn" onClick={()=>alert("Does not work")}>
            <Button text="Download CSV" color="black"/>
          </div>
        </div>
    </div>
  )
}
