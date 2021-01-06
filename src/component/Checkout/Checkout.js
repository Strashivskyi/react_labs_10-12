import React from "react";
import {Formik, useField, Form} from "formik";
import * as Yup from "yup";
import "./Checkout.css";
import ErrorMessage from "./ErrorMessage.styled"


const CustomTextInput = ({label, ...props})=>{
   const [field, meta] = useField(props);

   return(
       <>
       <label htmlFor={props.id || props.fullName}>{label}</label>
       <input {...field} {...props}/>
       {meta.touched && meta.error?(
           <ErrorMessage>{meta.error}</ErrorMessage>
       ) : null}
       </>
   )
}
const CustomCheckbox = ({children, ...props})=>{
    const [field, meta] = useField(props, 'checkbox');
 
    return(
        <>
        <label>
        <input type="checkbox" {...field} {...props}/>
        {children}
        </label>
        {meta.touched && meta.error?(
            <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}
        </>
    )
 }

const Checkout = () => {


  return (
    <>
    <div>
        <Formik 
        initialValues={{
            fullName: '',
            email: '',
            age: 0,
            phoneNumber: 0,
            acceptedTerms: false
        }}
        validationSchema={Yup.object({
            fullName: Yup.string()
            .matches(/(\w.+\s).+/, 'Enter at least 2 names')
            .min(4, "There should be more than 4 characters in your full name")
            .max(50, "There should be less than 50 characters in your full name")
            .required('Required'),
            email: Yup.string()
            .email('Invalid email')
            .min(4, "There should be more than 4 characters in your email")
            .max(50, "There should be less than 50 characters in your email"),
            age: Yup.string()
            .matches(/^[1-9][0-9]$/, "your age should 10 years min and 99 years max")
            .required('Required'),
            phoneNumber: Yup.string()
            .matches(/(09)(\d){8}\b/, 'Phone number should contain 10 characters starting with 09'),
            acceptedTerms: Yup.boolean()
            .required('Required')
            .oneOf([true], 'You must accept the terms and conditions')
        })}
        onSubmit={()=>{
            window.location = "http://localhost:3000/success";
        }}
        >

{

props => (

    <Form className="form">
        <h1>Checkout</h1>
<CustomTextInput label="full name" name="fullName" type="text" placeholder="Input name"/>
<CustomTextInput label="email" name="email" type="email" placeholder="Input email"/>
<CustomTextInput label="age" name="age" type="age" placeholder="Input age"/>
<CustomTextInput label="phone number" name="phoneNumber" type="phoneNumber" placeholder="Input phone number"/>

<CustomCheckbox name="acceptedTerms">I accept the terms and conditions</CustomCheckbox>
<button sype="submit">Submit</button>
    </Form>
)}
        </Formik>
        <div className="largeSpace"></div>
        </div>
        </>

  );
};

export default Checkout;
