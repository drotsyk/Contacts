import React, {useState} from 'react'
import { Button } from '../../../Button/Button'

export const RedactInfo = ({toggleRedact, redact, redactInfo, item, sortUsers}) => {
  const [user, setUser] = useState(item.name)
  const [phone, setPhone] = useState(item.phone)
  return (
    <div className="pop-up__content">
      <img onClick={()=> toggleRedact(!redact)} className="pop-up__close" src="./Assets/cross.svg" alt="" />
      <div className="pop-up__title">
        Redact contact
      </div>
      <form className="pop-up__form" action="" onSubmit={(e)=> {
        e.preventDefault()
        if(/^[a-zA-Z\u00C0-\u00ff]+\s+[a-zA-Z\u00C0-\u00ff]+$/.test(user) && /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(phone)){
          redactInfo(item.id, user.charAt(0).toUpperCase() + user.slice(1), phone)
          toggleRedact(!redact)
          sortUsers()
        }else {
          alert("Data entered incorrectly")
        }
      }}>
        <input 
          type="text" 
          className="pop-up__input" 
          placeholder="Contact Name" 
          maxLength="16" 
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          className="pop-up__input"
          placeholder="Contact Phone"
          maxLength="10" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button text="Save" color="#06C668" />
      </form>
      <div onClick={() => {
        toggleRedact(!redact)
        setUser("")
        setPhone("")
      }}>
        <Button text="Close" textColor={"red"} border={"1px solid red"} color={"inherit"}/>
      </div>
    </div>
  )
}
