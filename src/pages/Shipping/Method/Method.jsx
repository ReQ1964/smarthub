import classes from './Method.module.scss';
import Button from '../../../components/UI/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addOrderDetails } from '../../../store/order-slice';
import { useDispatch, useSelector } from 'react-redux';

const Method = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingMethod } = useSelector((state) => state.order.details);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      shipping: !shippingMethod
        ? 'standard'
        : shippingMethod.name.split(' ')[0].toLowerCase(),
    },
  });

  const onSubmit = (data) => {
    let shippingData;
    if (data.shipping === 'standard') {
      shippingData = { name: 'Standard shipping', price: 0 };
    } else {
      shippingData = { name: 'Priority shipping', price: 10 };
    }
    dispatch(addOrderDetails({ shippingMethod: shippingData }));
    navigate('/order/payment');
  };

  return (
    <div className={classes.method}>
      <h2>Shipping method</h2>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="radio"
            {...register('shipping')}
            id="standard"
            value="standard"
          />
          <label htmlFor="standard">Standard shipping</label>
          <p>Free</p>
        </div>
        <div>
          <input
            type="radio"
            {...register('shipping')}
            id="priority"
            value="priority"
          />
          <label htmlFor="priority">Priority shipping</label>
          <p>$10</p>
        </div>
        <Button className={classes.btn}>Go to payment</Button>
      </form>
    </div>
  );
};

export default Method;
