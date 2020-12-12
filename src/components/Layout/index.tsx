import * as React from 'react';
import BGOverlay from '../BGOverlay';
import Footer from '../Footer';
import Navbar from '../Navbar';
import styles from './layout.module.css';

interface ILayoutProps {
	navbarType?: string;
	overlay: boolean;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
	children,
	overlay,
	navbarType,
}) => {
	return (
		<div className={styles.wrapper}>
			<Navbar back={navbarType === 'back' ? true : false} />
			<div className={styles.content}>{children}</div>
			<Footer />
			{overlay ? <BGOverlay ring overlay /> : null}
		</div>
	);
};

export default Layout;
