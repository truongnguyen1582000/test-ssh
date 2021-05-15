import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/FormControl/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('Please enter title !').min(5, 'too short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (value) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(value);
      console.log(value);
    }
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmitForm)}>
      <h3>What you need to done !</h3>
      <InputField form={form} name="title" label="Todo" disable={false} />
    </form>
  );
}

export default TodoForm;
