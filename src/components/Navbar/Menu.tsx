import * as React from 'react';
import MenuItem from './MenuItem';
import styles from './navbar.module.css';

interface IMenuProps {
	onClose: () => void;
}

const Menu: React.FunctionComponent<IMenuProps> = ({ onClose }) => {
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

export default Menu;
