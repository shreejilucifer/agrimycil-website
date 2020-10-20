import * as React from 'react';
import styles from './navbar.module.css';

interface IBrandProps {}

const Brand: React.FunctionComponent<IBrandProps> = () => {
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
