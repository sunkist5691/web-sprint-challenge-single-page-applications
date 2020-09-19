import React, { useState } from "react";
import { Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Form from './components/Form'
import OrderList from './components/OrderList'
import styled from 'styled-components'

const Wrap = styled.section `

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

`

const App = () => {

  const [order, setOrder] = useState([])

  const addOrderList = (info) => {

    setOrder([...order, info])

  }

  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        Lambda Hut
      </h1>

      <Wrap>
        <Link 
          to='/' 
          style={{ textDecoration: 'none', color: 'black', marginBottom: '0.6rem'}}
        >
          Home
        </Link>

        <Link 
          to='/pizza/list'
          style={{ textDecoration: 'none', color: 'black'}}
        >
          Order List
        </Link>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path='/pizza/order'>
          <Form addOrderList={addOrderList}/>
        </Route>
      </Wrap>
      <Route path='/pizza/list'>
        {
          order.map( (eachOrder) => {

            return <OrderList key={eachOrder.id} order={eachOrder} />

          })
        }
      </Route>
    </>
  );
};
export default App;
