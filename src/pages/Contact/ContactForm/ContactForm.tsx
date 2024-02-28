import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import classes from './ContactForm.module.scss';
import Button from '@/components/UI/Button';

interface IContactFormData {
  email: string;
  name: string;
  topic: string;
  message: string;
}

const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ContactForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email.')
      .matches(emailRegExp, 'Please enter a valid email address.'),
    name: yup
      .string()
      .required('Please enter your name.')
      .min(2, 'Please enter a name with at least 2 characters.'),
    topic: yup
      .string()
      .required('Please select a topic.')
      .oneOf(
        ['business', 'warranty', 'job', 'complaint', 'other'],
        'Please select one of the given topics.',
      ),
    message: yup.string().required('The message cannot be empty.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      name: '',
      topic: '',
      message: '',
    },
  });

  const submitHandler = (data: IContactFormData) => {
    console.log(
      `The data is ready to use: ${data} [WILL BE IMPLEMENTED IN PHASE 2]`,
    );
  };

  return (
    <section className={classes.form}>
      <h1>Drop us a line!</h1>
      <form onSubmit={handleSubmit(submitHandler)} action="/help/contact">
        <input {...register('name')} placeholder="Name*" />
        <p className={classes.error}>{errors.name?.message}</p>
        <input {...register('email')} placeholder="Email*" />
        <p className={classes.error}>{errors.email?.message}</p>
        <select {...register('topic')}>
          <option value="" disabled={true}>
            --Choose the topic--
          </option>
          <option value="business">Business</option>
          <option value="job">Job</option>
          <option value="warranty">Warranty</option>
          <option value="job">Complaint</option>
          <option value="other">Other</option>
        </select>
        <p className={classes.error}>{errors.topic?.message}</p>
        <textarea {...register('message')} placeholder="Message*" />
        <p className={classes.error}>{errors.message?.message}</p>
        <Button type="submit">Submit Now</Button>
      </form>
    </section>
  );
};

export default ContactForm;
