import * as yup from 'yup'

const schema = yup.object().shape({

   name: yup
      .string() 
      .required('Name is required') 
      .min(2, 'Must be 2 characters or longer'),

   size: yup
      .string()
      .required('Must select the size')
      .min(1, 'Please select one of the size'),

   firstTopping: yup
      .boolean()
      .oneOf([true], 'Please choose 4 or more toppings'),
   
   secondTopping: yup
      .boolean()
      .oneOf([true], 'Please choose 4 or more toppings'),

   thirdTopping: yup
      .boolean()
      .oneOf([true], 'Please choose 4 or more toppings'), 

   fourthTopping: yup
      .boolean()
      .oneOf([true], 'Please choose 4 or more toppings'),
   
   fifthTopping: yup
      .boolean()
      .oneOf([true], 'Please choose 4 or more toppings'),

   instruction: yup
      .string()
      .min(0)

})


export default schema