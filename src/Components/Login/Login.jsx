import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { Button } from '../Button/Button'

export const Login = () => {
  const [inputValue, setValue] = useState(" ")
  return (
    
    <div className="login">
      <h1>SignIn</h1>
      <form className="login__form" action="" onInput={(e) => {
        e.preventDefault()
        if(inputValue !== " ")
          localStorage.setItem('name', JSON.stringify(e.target.value))
      }}>
        <input className="login__input" type="text" placeholder="What's your name?" onInput={(e) => {
          setValue(e.target.value)
        }}/>
        {/\S/.test(inputValue) ? (
          <Link className="login__btn" to="/Contacts">
          <Button 
            text="Submit"
            color="#06C668"
          />
        </Link>
        ):(
          <div onClick={()=> alert('Data entered incorrectly')}>
            <Button 
              text="Submit"
              color="#06C668"
            />
          </div>
        )}
      </form>
    </div>
  )
}
