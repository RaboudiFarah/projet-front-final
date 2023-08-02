import React from 'react'
import Sidebaradmin from './Sidebaradmin'
import Topbaradmin from './Topbaradmin'
import User from './User'

import UserList from './UserList'

export default function Admin() {
  return (
    <div>

    <Topbaradmin className="container"/>
 
      <Sidebaradmin/> 
      <UserList/>


 <User/> 

   

   
    </div>
  )
}
