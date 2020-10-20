import * as React from 'react';
import styles from './footer.module.css';

interface ICopyrightProps {}

const Copyright: React.FunctionComponent<ICopyrightProps> = () => {
	return (
		<div className={styles.copyright}>
			Copyright © {new Date().getFullYear()} Agrimycil Bioscience Pvt. Ltd.
		</div>
	);
};

export default Copyright;
