import React from 'react'
import Navigator from './Navigator'
import Content from './Content'
import Header from './Header'
import Paperbase from './Paperbase'
import Addproduct from '../addproduct&addcoupon/Addproduct'

function admin() {
  return (
    <div>
        <Header/>
        <Navigator/>
        <Paperbase/>
    </div>
  )
}

export default admin