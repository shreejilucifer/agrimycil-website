import * as React from 'react';
import Copyright from './copyright';
import styles from './footer.module.css';
import Social from './social';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = () => {
	return (
		<div className={styles.container}>
			<Social />
			<Copyright />
		</div>
	);
};

export default Footer;
