import React, {useState} from 'react'
import { Button } from '../../Button/Button'
import './AddContact.css'

export const AddContact = ({toggleAdd, open, takeInfo, sortUsers}) => {
  const [user, setUser] = useState(" ")
  const [phone, setPhone] = useState(" ")
  return (
    <>
      <div className="pop-up__content">
      <img onClick={()=> toggleAdd(!open)} className="pop-up__close" src="./Assets/cross.svg" alt="" />
        <div className="pop-up__title">New contact</div>
        <form className="pop-up__form" action="" onSubmit={(e)=> {
          e.preventDefault()
          if(/^[a-zA-Z\u00C0-\u00ff]+\s+[a-zA-Z\u00C0-\u00ff]+$/.test(user) && /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(phone)){
            takeInfo(user.charAt(0).toUpperCase() + user.slice(1), phone)
            sortUsers()
            toggleAdd(!open)
          }else {
            alert("data entered incorrectly")
          }
        }}>
          <input 
            type="text" 
            className="pop-up__input" 
            placeholder="Contact Name" 
            maxLength="16" 
            onChange={(e) => setUser(e.target.value)}/>
          <input 
            type="text" 
            className="pop-up__input" 
            placeholder="Contact Phone" 
            maxLength="10"  
            onChange={(e) => setPhone(e.target.value)}/>
          <Button text="Save" color="#06C668" />
        </form>
        <div onClick={() => {
          toggleAdd(!open)
          setUser("")
          setPhone("")
        }}>
          <Button text="Close" textColor={"red"} border={"1px solid red"} color={"inherit"}/>
        </div>
      </div>
    </>
  )
}
