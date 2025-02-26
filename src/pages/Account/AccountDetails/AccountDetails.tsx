import React from 'react';
import Button from '@/components/UI/Button/Button';
import classes from './AccountDetails.module.scss';

const AccountDetails = () => {
  const handleLogout = () => {};

  return (
    <section className={classes.account}>
      <Button onClick={handleLogout}>Sign out</Button>
      <h3>Account Page will be implemented in the phase 2</h3>
    </section>
  );
};

export default AccountDetails;
