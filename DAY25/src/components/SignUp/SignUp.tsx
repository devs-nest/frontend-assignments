import React, { useState } from 'react'

import FormInput from '../FormInput'
import CustomButton from '../CustomButton'

import {
  auth,
  createUserProfileDocument
} from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

const SignUp = () => {
  const [ userCredentials, setUserCredentials ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = userCredentials

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const {
        user
      } = await auth.createUserWithEmailAndPassword(
        email,
        password
      )

      await createUserProfileDocument(user, { displayName })

      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setUserCredentials({
      ...userCredentials,
      [name]: value
    })
  }

  const {
    displayName,
    email,
    password,
    confirmPassword
  } = userCredentials

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account.</h2>
      <span>Sign up with your email and password</span>
      <form
        className="sign-up-form"
        onSubmit={handleSubmit}
      >
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
        />
        <FormInput
          type="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirmed Password"
        />

        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  )
}

export default SignUp
