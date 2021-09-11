import React from "react";

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from "axios"

const Login = () => {
  const handleSubmit = value => console.log(values)
        axios.post('http://localhost:8080/v1/api/auth' ,values)
            .then(resp => console.log(resp))
}
  const validations = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().min(8).required()
  })
  return (
  <>
    <h1>Login</h1>
    <p>Insira seu email</p>
    <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form className="Login">
            <div className="Form-Group">
                <Field name="email" className="Login-Field"/>
                <ErrorMessage component="span" name="email" className="Login-Error"></ErrorMessage>
            </div>
            <button className='Login-Btn' type="submit">Login</button>
        </Form>
        <Form className="Login">
            <div className="Login-Group">
                <Field name="password" className="Login-Field"/>
                <ErrorMessage component="span" name="email" className="Login-Error"></ErrorMessage>
            </div>
            <button className='Login-Btn' type="submit">password</button>
        </Form>
    </Formik>
    </>
)
  }

export default Login

