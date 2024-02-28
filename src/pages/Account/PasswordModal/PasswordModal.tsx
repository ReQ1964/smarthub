import React from 'react';
import Modal from '@/components/UI/Modal/Modal';
import Button from '@/components/UI/Button/Button';
import cross from '@/assets/icon/navbar/x.svg';
import classes from './PasswordModal.module.scss';
import done from '@/assets/icon/done.svg';
import Spinner from '@/components/UI/Spinner/Spinner';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/firebase';
import { useForm } from 'react-hook-form';

interface IPasswordProps {
  modalIsOpen: boolean;
  modalCloseHandler: () => void;
  emailRegExp: RegExp;
}

const PasswordModal = ({
  modalIsOpen,
  modalCloseHandler,
  emailRegExp,
}: IPasswordProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email address.')
      .matches(emailRegExp, { message: 'Please enter a valid email address.' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email }: { email: string }) => {
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
      .catch((error) => {
        console.log(error.code, error.message);
      })
      .finally(() => {
        setIsLoading(false);
        setResetSent(true);
      });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={modalCloseHandler}
        defaultButton={false}
      >
        <div className={classes.forgotPasswordModal}>
          <img
            src={cross}
            alt="An icon to close the modal"
            onClick={modalCloseHandler}
            className={classes.cross}
          />
          <h3>I forgot my password</h3>

          {!resetSent && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={classes.email}>
                <label htmlFor="email">Email</label>
                <input
                  {...register('email')}
                  placeholder="Enter your email address"
                />
                <p className={classes.error}>{errors.email?.message}</p>
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Spinner className={classes.btnSpinner} />
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          )}

          {resetSent && (
            <div className={classes.resetSent}>
              <img
                src={done}
                alt="An icon showing email sending success"
                className={classes.done}
              />
              <p>
                If there is an account associated, you will receive an email
                with a link to reset your password.
              </p>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default PasswordModal;
