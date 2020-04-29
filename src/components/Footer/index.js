import styles from './footer.module.css';
import Social from './social';
import Copyright from './copyright';

const Footer = () => {
	return (
		<div className={styles.container}>
			<Social />
			<Copyright />
		</div>
	);
};

export default Footer;
