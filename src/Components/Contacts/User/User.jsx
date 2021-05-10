import React from 'react'
import { Button } from '../../Button/Button'
import { RedactInfo } from './RedactInfo/RedactInfo'
import { request } from './request'
import './User.css'
import '../Contacts.css'

export class User extends React.Component {
  state={
    img: null,
    redact: false,
  }

  toggleRedact = () => {
    this.setState({
      redact: !this.state.redact
    })
  }
  
  async getRequest () {
    const img = await request(this.props.item.id);
    this.setState({
      img: img.download_url,
    })
  }

  componentDidMount () {
    this.getRequest()
  }

  render(){
    const {redact} = this.state
    const {item, redactInfo, sortUsers} = this.props
    return (
      <>
        <div onClick={() => this.toggleRedact()} className="item__edit"><img src="./Assets/Edit.svg" alt="" /></div>
        <img className="item__photo" src={this.state.img} alt="" />
        <div className="item__title">{item.name}</div>
        <Button phone={item.phone} />
        {redact && (
          <div className="pop-up" >
            <RedactInfo 
              toggleRedact={this.toggleRedact}
              item={item}
              redact={redact}
              sortUsers={sortUsers}
              redactInfo={redactInfo}
            />
          </div>
        )}
      </>
    )
  }
  
}
