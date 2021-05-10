import React from 'react'
import './Button.css'

export const Button = ({phone, text, color, textColor, border}) => {
  return (
    <>
      {phone ? (
        <a className="phone" href={`tel:${phone}`} ><img src="./Assets/Phone.svg" alt="" /></a>
      ):(
        <button 
          className="submit" 
          style={{
            background: color,
            color: textColor,
            border: border,
          }}
        >
          {text}
        </button>
      )}
    </>
  )
}
