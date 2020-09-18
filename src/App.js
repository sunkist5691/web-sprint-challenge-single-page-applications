import React, { useState } from "react";
import { Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Form from './components/Form'
import OrderList from './components/OrderList'

const App = () => {

  const [order, setOrder] = useState([])

  const addOrderList = (info) => {

    setOrder([...order, info])

  }

  return (
    <>
      <h1>Lambda Hut</h1>
      <Link to='/'>Home</Link>
      <Route exact path="/"><HomePage /></Route>
      <Route path='/pizza'><Form addOrderList={addOrderList}/></Route>

      {
        order.map( (eachOrder) => {

          return <OrderList key={eachOrder.id} order={eachOrder} />

        })
      }

    </>
  );
};
export default App;
