import React, { useState } from 'react'
import Navbar from './assets/Navbar'
import Heading from './assets/Heading'
import Cards from './assets/Cards'
import Notesdata from './Notesdata'

export default function App() {

  return (
    <div className='pb-6'>
      <Navbar></Navbar>
      <Heading></Heading>
      <Cards notes={Notesdata}></Cards>
    </div>
  )
}
