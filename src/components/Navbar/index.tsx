import styles from './navbar.module.css';
import Brand from './Brand';
import Cart from './Cart';
import Hamburger from './Hamburger';
import Link from 'next/link';

const Back = () => {
	return (
		<Link href="/">
			<a className={styles.backContainer}>
				<img src="/icons/arrow.svg" className={styles.arrow} />
				<div className={styles.back}>back</div>
			</a>
		</Link>
	);
};

const Navbar = ({ back }) => {
	return (
		<div className={styles.container}>
			<div className={styles.brand}>{back ? <Back /> : <Brand />}</div>
			<div className={styles.options}>
				<Cart />
				<Hamburger />
			</div>
		</div>
	);
};

export default Navbar;
