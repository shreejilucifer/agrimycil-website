import Link from 'next/link';
import * as React from 'react';
import styles from './navbar.module.css';

interface IBackProps {}

const Back: React.FunctionComponent<IBackProps> = () => {
	return (
		<Link href="/">
			<a className={styles.backContainer}>
				<img src="/icons/arrow.svg" className={styles.arrow} />
				<div className={styles.back}>back</div>
			</a>
		</Link>
	);
};

export default Back;
