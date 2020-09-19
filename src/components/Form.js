import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import schema from './schema'
import * as yup from 'yup'
import axios from 'axios'

// Style Components
const WrapForm = styled.form `

   display: flex;
   flex-flow: column wrap;
   align-items: center;
   margin-top: 1rem;

`

const Error = styled.p `

   color: red;
   font-size: 0.8rem;

`

const Button = styled.button `

   width: 25%;

`

// Component Form
const Form = ({ addOrderList }) => {

   // Validate info State
   const [info, setInfo] = useState({
      
      name: '',
      size: '',
      firstTopping: false,
      secondTopping: false,
      thirdTopping: false,
      fourthTopping: false,
      fifthTopping: false,
      instruction: '',
      
   })
   
   // Order info state
   const [orderInfo, setOrderInfo] = useState(info)

   // Error State
   const [error, setError] = useState({

      name: '',
      size: '',
      firstTopping: '',
      secondTopping: '',
      thirdTopping: '',
      fourthTopping: '',
      fifthTopping: '',
   })

   // Order button State
   const [disabled, setDisabled] = useState(true)

   // Validation
   const validation = (e, value) => {

      yup
         .reach(schema, e.target.name)
         .validate(value)
         .then(valid => {
            
            setError({
               ...error,
               [e.target.name]: ''
            })
         })
         .catch(err => {

            setError({
               ...error,
               [e.target.name]: err.errors[0]
            })
         })

   }

   // This function expression updates 'orderInfo' state in a string
   const clickCheckBox = (e) => {

      let value = e.target.type === 'checkbox' ? e.target.id : e.target.value

      // if-else statement
      if(e.target.type === 'checkbox' && e.target.checked === false){

         setOrderInfo({ ...orderInfo, [e.target.name]: ''})

      } else {

         setOrderInfo({ ...orderInfo, [e.target.name]: value })

      }

   }

   const changeHandler = (e) => {
      
      let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    
      e.persist()

      validation(e, value)
      
      // The checkbox will update 'orderInfo' state into string
      clickCheckBox(e)

      // This state will need for validation for error
      setInfo({ ...info, [e.target.name]: value })

   }

   // Function to reset and prevent default when submit the info
   const formSubmit = (e) => {

      e.preventDefault();

      // Send data of the object we like to send and get the data back from the server
      axios
         .post('https://reqres.in/api/users', orderInfo)
         .then( response => {

            //Function from App.js
            addOrderList(response.data)
         })
         .catch( err => {
            console.log(err)
         })

      //Resets
      setInfo({

         name: '',
         size: '',
         firstTopping: false,
         secondTopping: false,
         thirdTopping: false,
         fourthTopping: false,
         fifthTopping: false,
         instruction: '',

      })

      
   }

   // Check validation the 'info' state in order to enable 'order' button
   useEffect(() => {

      schema // schema is equal to 'yup.object().shape({...})'
         .isValid(info) // check the 'info' state and go over every 'key' and value to match with 'schema' key and value if fulfilled the restriction.
         .then((valid) => { // if the 'info' state doesn't give any errors when matching with 'schema', then returns 'true'
            setDisabled(!valid);
      });

   }, [info]);

   // Create JSX DOM elements
   return (

      <WrapForm onSubmit={ formSubmit }>

   {/* Name input */}
         <label 
            htmlFor='name'
            style={{marginBottom: '0.6rem'}}
         >
            Name
            <input 
               id={info.name} 
               type='text'
               name='name' 
               placeholder='Name' 
               onChange={changeHandler}
               value={info.name}
            />
            { error.name.length > 0 ? <Error>{error.name}</Error> : null /* show error message */}
         </label>

   {/* Size input */}
         <label 
            htmlFor='size'
            style={{marginBottom: '0.6rem'}}
         >
            Choose size:
            <select 
               id={info.size} 
               name='size' 
               onChange={changeHandler}

               value={info.size}
            >
               <option value=''>---------select---------</option>
               <option value='extra-large'>Extra-large</option>
               <option value='large'>Large</option>
               <option value='medium'>Medium</option>
               <option value='small'>Small</option>
               <option value='extra-small'>Extra-small</option>
            </select>
         </label>

   {/* Checkbox input */}
         <label htmlFor='firstTopping'>
            Sausage
            <input
               id='Sausage' 
               type='checkbox' 
               name='firstTopping' 
               checked={info.firstTopping}
               onChange={changeHandler}
            />
            { error.firstTopping.length > 0 ? <Error>{error.firstTopping}</Error> : null /* show error message */}
         </label>

         <label htmlFor='secondTopping'>
            Pepperoni
            <input
               id='Pepperoni' 
               type='checkbox' 
               name='secondTopping' 
               checked={info.secondTopping}
               onChange={changeHandler}
            />
            { error.secondTopping.length > 0 ? <Error>{error.secondTopping}</Error> : null /* show error message */}
         </label>

         <label htmlFor='thirdTopping'>
            Pineapple
            <input
               id='Pineapple' 
               type='checkbox' 
               name='thirdTopping' 
               checked={info.thirdTopping}
               onChange={changeHandler}
            />
            { error.thirdTopping.length > 0 ? <Error>{error.thirdTopping}</Error> : null /* show error message */}
         </label>

         <label htmlFor='fourthTopping'>
            Extra Cheese
            <input
               id='Extra Cheese' 
               type='checkbox' 
               name='fourthTopping' 
               checked={info.fourthTopping}
               onChange={changeHandler}
            />
            { error.fourthTopping.length > 0 ? <Error>{error.fourthTopping}</Error> : null /* show error message */}
         </label>

         <label htmlFor='fifthTopping'>
            Olive
            <input
               id='Olive' 
               type='checkbox' 
               name='fifthTopping' 
               checked={info.fifthTopping}
               onChange={changeHandler}
            />
            { error.fifthTopping.length > 0 ? <Error>{error.fifthTopping}</Error> : null /* show error message */}
         </label>

   {/* Name input */}
         <label 
            htmlFor='instruction'
            style={{marginTop: '0.6rem', marginBottom: '0.6rem'}}
         >
            Add Memo
            <textarea 
               id={info.instruction}
               type='textarea'
               name='instruction' 
               placeholder='Any special instruction' 
               onChange={changeHandler} 
               value={info.instruction}
            />
         </label>

   {/* Submit button */}
         <Button 
            disabled={disabled} 
            type='submit'
         >
            Order
         </Button>

      </WrapForm>
   )

}

export default Form