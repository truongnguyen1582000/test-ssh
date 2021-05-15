import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';
import { login } from '../userSlice';

function Login({ closeDialog }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleOnSubmit = async (value) => {
    try {
      const action = login(value);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      console.log('user: ', user);
      enqueueSnackbar('Login successfully !', { variant: 'success' });
      closeDialog();
    } catch (error) {
      enqueueSnackbar('Fail to login !', { variant: 'error' });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleOnSubmit} />
    </div>
  );
}

export default Login;
