import styles from './navbar.module.css';

const Cart = () => {
	return (
		<div className={styles.cartContainer}>
			<img src="/icons/cart.svg" className={styles.cartIcon} />
		</div>
	);
};

export default Cart;
