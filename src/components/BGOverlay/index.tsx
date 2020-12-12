import styles from './bgoverlay.module.css';

import * as React from 'react';

interface IBGOverlayProps {
	ring: boolean;
	overlay: boolean;
}

const BGOverlay: React.FunctionComponent<IBGOverlayProps> = ({
	overlay,
	ring,
}) => {
	return (
		<div className={styles.container}>
			{ring ? <div className={styles.ring}></div> : null}
			{overlay ? <div className={styles.overlay}></div> : null}
		</div>
	);
};

export default BGOverlay;
