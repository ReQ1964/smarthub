import { Form } from 'react-router-dom';
import classes from './Form.module.scss';
import Button from '../../../components/UI/Button';

const ContactPage = () => {
	return (
		<section className={classes.form}>
      <h1>Drop us a line!</h1>
			<Form method="post">
				<input type="text" name="name" required placeholder="Name*" />
				<input type="text" name="email" required placeholder="Email Address*" />
        <select name="topic">
          <option value="business">Business</option>
          <option value="business">Warranty</option>
          <option value="business">Other</option>
        </select>
				<textarea type="text" name="message" required placeholder="Message"/>
				<Button type="submit">Submit Now</Button>
			</Form>
		</section>
	);
};

export default ContactPage;
