import * as React from 'react';
import styles from './footer.module.css';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Whatsapp from './icons/Whatsapp';

interface ISocialProps {}

const Social: React.FunctionComponent<ISocialProps> = () => {
	return (
		<div className={styles.socialContainer}>
			<a
				target="_blank"
				href="https://www.facebook.com/"
				className={styles.links}
			>
				<Facebook />
			</a>
			<a
				target="_blank"
				href="https://www.instagram.com/"
				className={styles.links}
			>
				<Instagram />
			</a>
			<a className={styles.links}>
				<Whatsapp />
			</a>
		</div>
	);
};

export default Social;
