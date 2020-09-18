import * as yup from 'yup'

const schema = yup.object().shape({

   name: yup
      .string() 
      .required('Name is required') 
      .min(2, 'Must be 2 characters or longer'),

   size: yup
      .string()
      .required('Email is required')
      .min(1, 'Please select one of the option'),

   firstTopping: yup
      .string()
      .min(1, 'Please select one of the option'),
   
   secondTopping: yup
      .string()
      .min(1, 'Please select one of the option'),

   thirdTopping: yup
      .string()
      .min(1, 'Please select one of the option'),

   fourthTopping: yup
      .string()
      .min(1, 'Please select one of the option'),

   instruction: yup
      .string()
      .min(0)

})


export default schema