import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapInfo = styled.section `

   border: solid 2px black;
   border-radius: 0.7rem;
   width: 25%;
   margin: 2%;

`



const OrderList = ({order}) => {

   return (
      <>
         <WrapInfo>
            <p>{order.name}</p>
            <p>{order.size}</p>
            <p>{order.firstTopping}</p>
            <p>{order.secondTopping}</p>
            <p>{order.thirdTopping}</p>
            <p>{order.fourthTopping}</p>
            <p>{order.instruction}</p>
         </WrapInfo>
      </>
   )

}


export default OrderList