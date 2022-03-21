import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import './sign-in.styles.scss'
import {
  signInWithGoogle,
  auth
} from '../../firebase/firebase.utils'

const SignIn = () => {
  const [ userCredentials, setCredentials ] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event: any) => {
    const { value, name } = event.target

    setCredentials({ ...userCredentials, [name]: value })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const { email, password } = userCredentials

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCredentials({ email: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  const { email, password } = userCredentials

  return (
    <div className="sign-in">
      <h2>I have already have account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>

          <CustomButton
            onClick={signInWithGoogle}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
