import styles from './footer.module.css';

const Copyright = () => {
	return (
		<div className={styles.copyright}>
			Copyright © {new Date().getFullYear()} Agrimycil Bioscience Pvt. Ltd.
		</div>
	);
};

export default Copyright;
