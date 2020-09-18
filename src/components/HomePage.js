import React from 'react'
import styled from 'styled-components'
import { Link , useParam } from 'react-router-dom'


const HomePage = () => {

   return (
      
      <Link className="link" to='/pizza'>Start to order</Link>
   )

}

export default HomePage