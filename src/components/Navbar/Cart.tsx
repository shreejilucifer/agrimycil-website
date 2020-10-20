import * as React from 'react';
import styles from './navbar.module.css';

interface ICartProps {}

const Cart: React.FunctionComponent<ICartProps> = () => {
	return (
		<div className={styles.cartContainer}>
			<img src="/icons/cart.svg" className={styles.cartIcon} />
		</div>
	);
};

export default Cart;
