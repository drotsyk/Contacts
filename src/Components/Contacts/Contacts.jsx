import React from 'react'
import { User } from './User/User'
import { Header } from './Header/Header'
import { AddContact } from './AddContact/AddContact'
import './Contacts.css'

export class Contacts extends React.Component {
  state={
    open: false,
    users: [],
  }

  toggleAdd = () => {
    this.setState({
      open: !this.state.open
    })
  }

  componentDidMount () {
    let users = JSON.parse(localStorage.getItem('users'))
    if(users !== null) {
      this.setState({
        users 
      })
    }
  }

  redactInfo = (id, name, phone) => {
    this.setState({
      users: this.state.users.map(item => {
        if(item.id !== id){
          return item;
        }
        return {...item, name, phone, id}
      })
    }, ()=> {
      this.saveUsers(...this.state.users)
    })
  }

  takeInfo = (name, phone) => {
    this.setState(state =>{
      const newUser = {
        name,
        phone,  
        id: state.users.length + 1
      }
      this.saveUsers(...this.state.users, newUser)
      return {
        users: [...state.users, newUser]
      }
    })
  }

  saveUsers = (...args) => {
    localStorage.setItem('users', JSON.stringify(args))
  }
 
  sortUsers = () => {
    this.setState(state => ({
      users: state.users.sort(function(a, b){
        var nameA = a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) 
          return -1
        if (nameA > nameB)
          return 1
        return 0 
        })
      })
    )
  }

  render(){
    const { open, users, redact } = this.state
     return (
      <div className="contacts">
        <Header toggleAdd={this.toggleAdd}/>
        <div className="contacts__container" >
          {users !== null  && users.map((item,index) => (
            <div key={index} className="item__container">
              <User 
                item={item}
                redact={redact}
                sortUsers={this.sortUsers}
                redactInfo={this.redactInfo}
              />
            </div>
          ))}
        </div>
        {open && (
          <div  className={open ? "pop-up" : "pop-up close"} >
            <AddContact 
              toggleAdd={this.toggleAdd}
              sortUsers={this.sortUsers}
              open
              takeInfo={this.takeInfo}
            />
          </div>
        )}
        
      </div>
    )
  }
  
}
