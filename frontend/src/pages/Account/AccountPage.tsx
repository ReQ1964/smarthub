import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './AccountPage.module.scss';
import LoginForm from './LoginForm/LoginForm';
import SignUpForm from './SignUpForm/SignUpForm';
import AccountDetails from './AccountDetails/AccountDetails';
import PasswordModal from './PasswordModal/PasswordModal';
import googleIcon from '@/assets/icon/google.svg';

type IMethod = 'login' | 'register';

export interface AccountFormsProps {
  setMethod: (type: IMethod) => void;
  emailRegExp: RegExp;
}

const AccountPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [method, setMethod] = useState<IMethod>('login');
  const [user, setUser] = useState<boolean>(false);

  const emailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const { reset } = useForm();

  const methodHandler = (type: IMethod) => {
    const method = type === 'login' ? 'register' : 'login';
    setMethod(method);
  };

  const modalCloseHandler = () => {
    setModalIsOpen(false);
    reset();
  };

  const openModalHandler = () => {
    setModalIsOpen(true);
  };

  return (
    <main>
      {modalIsOpen && (
        <PasswordModal
          modalIsOpen={modalIsOpen}
          modalCloseHandler={modalCloseHandler}
          emailRegExp={emailRegExp}
        />
      )}
      {!user ? (
        <>
          {method === 'login' ? (
            <LoginForm
              setMethod={methodHandler}
              emailRegExp={emailRegExp}
              openModal={openModalHandler}
            />
          ) : (
            <SignUpForm setMethod={methodHandler} emailRegExp={emailRegExp} />
          )}
          <div className={classes.googleContainer}>
            <p>or</p>
            <button className={classes.btnGoogle}>
              <img src={googleIcon} alt="" />
              Continue with Google
            </button>
          </div>
        </>
      ) : (
        <AccountDetails />
      )}
    </main>
  );
};

export default AccountPage;
