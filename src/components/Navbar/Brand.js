import styles from './navbar.module.css';

const Brand = () => {
	return (
		<div className={styles.brandContainer}>
			<div className={styles.logo}>
				<img src="/icons/logo.png" alt="Agrimycil" />
			</div>
			<div className={styles.title}>Agrimycil</div>
		</div>
	);
};

export default Brand;
