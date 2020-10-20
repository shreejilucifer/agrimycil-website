import * as React from 'react';
import { useState } from 'react';
import Menu from './Menu';
import styles from './navbar.module.css';

interface IHamburgerProps {}

const Hamburger: React.FunctionComponent<IHamburgerProps> = () => {
	const [toggle, setToggle] = useState<boolean>(false);
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

export default Hamburger;
