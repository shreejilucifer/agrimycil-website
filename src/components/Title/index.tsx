import * as React from 'react';
import styles from './title.module.css';

interface ITitleProps {}

const Title: React.FunctionComponent<ITitleProps> = ({ children }) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{children}</h3>
		</div>
	);
};

export default Title;
