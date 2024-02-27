import classes from './DetailsForm.module.scss';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { addOrderDetails } from '../../../store/order-slice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/UI/Button';

const DetailsForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.order.details);

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Please enter your email.')
      .email('Please enter a valid email address.'),
    number: yup
      .string()
      .required('Please enter your phone number.')
      .matches(phoneRegExp, 'Please enter a valid phone number.'),
    name: yup
      .string()
      .required('Please enter your name.')
      .min(2, 'Please enter a name with at least 2 characters.'),
    surname: yup
      .string()
      .required('Please enter your surname.')
      .min(2, 'Please enter a name with at least 2 characters.'),
    address: yup.string().required('Please enter your address.'),
    postal: yup.string().required('Please enter your postal code.'),
    city: yup.string().required('Please enter your city.'),
    note: yup.string(),
    country: yup.string().required('Please choose your country'),
    region: yup.string().required('Please choose your region'),
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: orderDetails.email,
      number: orderDetails.number,
      name: orderDetails.name,
      surname: orderDetails.surname,
      address: orderDetails.address,
      postal: orderDetails.postal,
      city: orderDetails.city,
      note: orderDetails.note,
      country: orderDetails.country,
      region: orderDetails.region,
    },
  });

  const onSubmit = (data) => {
    dispatch(addOrderDetails(data));
    navigate('/order/shipping');
  };

  return (
    <form className={classes.detailsForm} onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact</h2>
      <input {...register('email')} placeholder="Email*" />
      <p className={classes.error}>{errors.email?.message}</p>

      <input {...register('number')} placeholder="Phone Number*" />
      <p className={classes.error}>{errors.number?.message}</p>

      <h2>Shipping</h2>
      <input {...register('name')} placeholder="Name*" />
      <p className={classes.error}>{errors.name?.message}</p>

      <input {...register('surname')} placeholder="Surname*" />
      <p className={classes.error}>{errors.surname?.message}</p>

      <input {...register('address')} placeholder="Address*" />
      <p className={classes.error}>{errors.address?.message}</p>

      <input {...register('city')} placeholder="City*" />
      <p className={classes.error}>{errors.city?.message}</p>

      <input {...register('postal')} placeholder="Postal Code*" />
      <p className={classes.error}>{errors.postal?.message}</p>

      <input {...register('note')} placeholder="Shipping Note" />
      <p className={classes.error}>{errors.note?.message}</p>

      <Controller
        name="country"
        render={({ field: { name, value, onChange } }) => (
          <CountryDropdown
            name={name}
            value={value}
            onChange={onChange}
            classes={classes.dropdown}
          />
        )}
        control={control}
      />
      <p className={classes.error}>{errors.country?.message}</p>
      <Controller
        name="region"
        render={({ field: { name, value, onChange } }) => (
          <RegionDropdown
            country={watch('country')}
            name={name}
            value={value}
            onChange={onChange}
            classes={classes.dropdown}
          />
        )}
        control={control}
      />
      <p className={classes.error}>{errors.region?.message}</p>

      <Button type="submit" className={classes.btn}>
        Go to shipping
      </Button>
    </form>
  );
};

export default DetailsForm;
