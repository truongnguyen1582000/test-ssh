import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import { register } from '../userSlice';

function Register({ closeDialog }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSubmit = async (value) => {
    try {
      value.username = value.email;
      const action = register(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('user: ', user);
      enqueueSnackbar('Register successfully !', { variant: 'success' });
      closeDialog();
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
      console.log('err.res', error.response);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Register;
