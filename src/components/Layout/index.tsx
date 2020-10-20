import styles from './layout.module.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import BGOverlay from '../BGOverlay';

const Layout = ({ navbarType, overlay, children }) => {
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
