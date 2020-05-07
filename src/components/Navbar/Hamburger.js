import styles from './navbar.module.css';
import { useState } from 'react';
import Link from 'next/link';

const Hamburger = () => {
	const [toggle, setToggle] = useState(false);
	return (
		<React.Fragment>
			<div
				className={styles.hamburgerContainer}
				onClick={() => setToggle(true)}
			>
				<img src="/icons/hamburger.svg" className={styles.hamburgerIcon} />
			</div>
			{toggle ? <Menu onClose={() => setToggle(false)} /> : null}
		</React.Fragment>
	);
};

const Menu = ({ onClose }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.menuNavbar}>
				<img
					src="/icons/cross.svg"
					className={styles.cross}
					onClick={() => onClose()}
				/>
			</div>
			<div className={styles.menuContent}>
				<MenuItem to="/" title="Home" />
				<MenuItem to="/store" title="Store" />
				<MenuItem to="/about" title="About Us" />
				<MenuItem to="/contact" title="Contact Us" />
				<MenuItem to="/blog" title="Blog" />
			</div>
		</div>
	);
};

const MenuItem = ({ to, title }) => (
	<Link href={to}>
		<a className={styles.link}>{title}</a>
	</Link>
);

export default Hamburger;
