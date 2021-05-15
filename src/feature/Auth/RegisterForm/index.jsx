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

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function TodoForm({ onSubmit }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('should has at least two words', 'Please enter at least two word.', (value) => {
        return value.trim().split(' ').length >= 2;
      }),
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    password: yup
      .string()
      .required('Please enter your password.')
      .min(6, 'Please enter at least 6 characters.'),
    retypePassword: yup
      .string()
      .required('Please retype your passowrd.')
      .oneOf([yup.ref('password')], "Password doesn't match!"),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
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
        Create New Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField
          fullWidth={true}
          form={form}
          name="fullName"
          label="Full Name"
          disable={false}
        />
        <InputField fullWidth={true} form={form} name="email" label="Email" disable={false} />
        <PasswordField form={form} name="password" label="Password" />
        <PasswordField form={form} name="retypePassword" label="Retype Password" />
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
          Create An Account
        </Button>
      </form>
    </>
  );
}

export default TodoForm;
