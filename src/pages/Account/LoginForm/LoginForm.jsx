import classes from '../AccountPage.module.scss';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '../../../components/UI/Button';
import visibleIcon from '../../../assets/icon/navbar/visible.svg';
import invisibleIcon from '../../../assets/icon/navbar/invisible.svg';
import {
  signInWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { auth } from '../../../firebase';
import Spinner from '../../../components/UI/Spinner';

const LoginForm = ({ setMethod, emailRegExp, openModal }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email address.')
      .matches(emailRegExp, { message: 'Please enter a valid email address.' }),
    password: yup.string().required('Please enter your password.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onLogin = ({ email, password }) => {
    setError(false);
    setIsLoading(true);
    fetchSignInMethodsForEmail(auth, email)
      .then((result) => {
        if (result.filter((item) => item != 'password').length >= 1) {
          setError("You're already using a different login method!");
          return;
        }
        signInWithEmailAndPassword(auth, email, password).catch((error) => {
          console.log(error.code, error.message);
          if (error.message === 'auth/user-not-found') {
            setError('Invalid email and/or password!');
          } else {
            setError(error.message);
          }
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className={classes.loggingForm}>
      <div className={classes.login}>
        <h1>Login to your account</h1>
        {error && <p className={classes.error}>{error}</p>}
        <form onSubmit={handleSubmit(onLogin)} className={classes.loginForm}>
          <div className={classes.email}>
            <label htmlFor="email">Email</label>
            <input
              {...register('email')}
              placeholder="Enter your email address"
            />
            <p className={classes.error}>{errors.email?.message}</p>
          </div>
          <div className={classes.password}>
            <label htmlFor="password">Password</label>
            <img
              onClick={() => setPasswordShown((prevState) => !prevState)}
              src={passwordShown ? visibleIcon : invisibleIcon}
              alt=""
            />
            <input
              type={passwordShown ? 'text' : 'password'}
              {...register('password')}
              placeholder="Enter your password"
            />
            <p className={classes.error}>{errors.password?.message}</p>
          </div>
          <p className={classes.forgotPassword} onClick={openModal}>
            Forgot password?
          </p>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner className={classes.btnSpinner} />
            ) : (
              'Login Now'
            )}
          </Button>
        </form>
        <p className={classes.helper}>
          Don't Have An Account?{' '}
          <span
            onClick={() => {
              setMethod('login');
              setPasswordShown(false);
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
