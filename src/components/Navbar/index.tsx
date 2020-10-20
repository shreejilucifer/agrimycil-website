import styles from './navbar.module.css';
import Brand from './Brand';
import Cart from './Cart';
import Hamburger from './Hamburger';
import Back from './Back';

import * as React from 'react';

interface INavbarProps {
	back: boolean;
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ back }) => {
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
