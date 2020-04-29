import styles from '../src/styles/indexpage.module.css';
import Footer from '../src/components/Footer';
import BGOverlay from '../src/components/BGOverlay';

const IndexPage = () => {
	return (
		<div className={styles.wrapper}>
			Hello World
			<Footer />
			<BGOverlay ring overlay />
		</div>
	);
};

export default IndexPage;
