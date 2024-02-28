import React from 'react';
import classes from '../AccountPage.module.scss';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Button from '@/components/UI/Button/Button';
import visibleIcon from '@/assets/icon/navbar/visible.svg';
import invisibleIcon from '@/assets/icon/navbar/invisible.svg';
import Spinner from '@/components/UI/Spinner/Spinner';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';
import { AccountFormsProps } from '../AccountPage';

interface ISignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = ({ setMethod, emailRegExp }: AccountFormsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email address.')
      .matches(emailRegExp, 'Please enter a valid email address.'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(6, 'Password has to be at least 6 characters long.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], "Passwords don't match")
      .required('Please confirm your password.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onRegister = ({
    email,
    password,
    confirmPassword,
  }: ISignUpFormData) => {
    if (password === confirmPassword) {
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setError(true);
          if (error.code === 'auth/email-already-in-use') {
            setErrorMessage('Email already in use!');
          } else {
            setErrorMessage(error.message);
          }
        })
        .finally(() => {
          setIsLoading(false);
          setError(false);
        });
    }
  };

  return (
    <section className={classes.loggingForm}>
      <div className={classes.register}>
        <h1>Create an account</h1>
        <form
          onSubmit={handleSubmit(onRegister)}
          className={classes.registerForm}
        >
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
          <div className={classes.password}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type={passwordShown ? 'text' : 'password'}
              {...register('confirmPassword')}
              placeholder="Confirm your password"
            />
            <p className={classes.error}>{errors.confirmPassword?.message}</p>
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <Spinner className={classes.btnSpinner} />
            ) : (
              'Create Account'
            )}
          </Button>
          {error && <p className={classes.error}>{errorMessage}</p>}
        </form>
        <p className={classes.helper}>
          Already Have An Account?{' '}
          <span
            onClick={() => {
              setMethod('register');
              setPasswordShown(false);
            }}
          >
            Log In
          </span>
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;
