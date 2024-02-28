import React from 'react';
import Button from '@/components/UI/Button/Button';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase';
import classes from './AccountDetails.module.scss';

const AccountDetails = () => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out successfully');
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <section className={classes.account}>
      <Button onClick={handleLogout}>Sign out</Button>
      <h3>Account Page will be implemented in the phase 2</h3>
    </section>
  );
};

export default AccountDetails;
