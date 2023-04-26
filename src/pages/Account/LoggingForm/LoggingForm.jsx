import classes from './LoggingForm.module.scss'
import { useState } from 'react'
import { Form } from 'react-router-dom'
import Button from '../../../components/UI/Button'
import visibleIcon from '../../../assets/icon/navbar/visible.svg'
import invisibleIcon from '../../../assets/icon/navbar/invisible.svg'

const LoggingForm = () => {
  const [method, setMethod] = useState('login')
  const [passwordShown, setPasswordShown] = useState(false)

  return <section className={classes.loggingForm}>
    {method === "login" && <div className={classes.login}>
      <h1>Login to your account</h1>
      <Form className={classes.loginForm}>
      <div className={classes.email}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" placeholder='Enter your email address'/>
      </div>
      <div className={classes.password}>
        <label htmlFor="password">Password</label>
        <img onClick={() => setPasswordShown(prevState => !prevState)} src={passwordShown ? visibleIcon : invisibleIcon} alt="" />
        <input type={passwordShown ? 'text' : 'password'} required id="password" placeholder='Enter your password'/>
      </div>
      <Button type="submit">Login now</Button>
      </Form>
      <p>Don't Have An Account? <span onClick={() => {
        setMethod('register')
        setPasswordShown(false)
      }} >Sign Up</span></p>
      </div>}

    {method === "register" && <div className={classes.register}>
      <h1>Create an account</h1>
      <Form className={classes.registerForm}>
      <div className={classes.email}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" placeholder='Enter your email address'/>
      </div>
      <div className={classes.password}>
        <label htmlFor="password">Password</label>
        <img onClick={() => setPasswordShown(prevState => !prevState)} src={passwordShown ? visibleIcon : invisibleIcon} alt="" />
        <input type={passwordShown ? 'text' : 'password'} required id="password" placeholder='Enter your password'/>
      </div>
      <Button type="submit">Create account</Button>
      </Form>
      <p>Already Have An Account? <span onClick={() => {
        setMethod('login')
        setPasswordShown(false)
      }} >Log In</span></p>
      </div>}
  </section>
}

export default LoggingForm