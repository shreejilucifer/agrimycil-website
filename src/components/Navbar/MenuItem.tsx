import Link from 'next/link';
import * as React from 'react';
import styles from './navbar.module.css';

interface IMenuItemProps {
	to: string;
	title: string;
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({ title, to }) => {
	return (
		<Link href={to}>
			<a className={styles.link}>{title}</a>
		</Link>
	);
};

export default MenuItem;
