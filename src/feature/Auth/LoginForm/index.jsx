import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LockOutlined } from '@material-ui/icons';
import InputField from 'components/FormControl/InputField';
import PasswordField from 'components/FormControl/PasswordField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './style.css';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function LoginForm({ onSubmit }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(6, 'Please enter at least 6 characters.'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema), // resolver
  });

  const { isSubmitting } = form.formState;

  const handleSubmitForm = async (value) => {
    if (onSubmit) {
      await onSubmit(value);
    }
    form.reset();
  };

  return (
    <>
      {isSubmitting && <LinearProgress />}
      <Avatar className="avatar">
        <LockOutlined />
      </Avatar>
      <Typography className="heading" component="h3" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField fullWidth={true} form={form} name="identifier" label="Email" disable={false} />
        <PasswordField form={form} name="password" label="Password" />
        <Button
          className={classes.button}
          type="submit"
          size="large"
          variant="contained"
          fullWidth
          onClick={onSubmit}
          color="primary"
          disabled={isSubmitting}
        >
          Sign in
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
