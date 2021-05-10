import React, { useState } from 'react'
import { Login } from '../Login/Login'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Contacts } from '../Contacts/Contacts'
import './App.css'

export const App = () => {
  const [user, setName] = useState("")
  return (
    <HashRouter>
      <Switch>
        <Route path="/Contacts">
          <Contacts name={user}/>
        </Route>
        <Route path="/">
          <Login setName= {setName}/>
        </Route>
      </Switch>
    </HashRouter>
  )
}
