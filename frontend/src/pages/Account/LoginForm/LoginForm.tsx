import React, { useState } from 'react';
import classes from '../AccountPage.module.scss';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@/components/UI/Button/Button';
import visibleIcon from '@/assets/icon/navbar/visible.svg';
import invisibleIcon from '@/assets/icon/navbar/invisible.svg';
import Spinner from '@/components/UI/Spinner/Spinner';
import { AccountFormsProps } from '../AccountPage';

interface LoginFormProps extends AccountFormsProps {
  openModal: () => void;
}

interface ILoginData {
  email: string;
  password: string;
}

const LoginForm = ({ setMethod, emailRegExp, openModal }: LoginFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

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

  const onLogin = ({ email, password }: ILoginData) => {};

  return (
    <section className={classes.loggingForm}>
      <div className={classes.login}>
        <h1>Login to your account</h1>
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
              alt="An icon to show the password visibility"
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
          {error && <p className={classes.error}>{errorMessage}</p>}
        </form>
        <p className={classes.helper}>
          Don&apos;t Have An Account?{' '}
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
