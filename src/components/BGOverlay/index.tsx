import styles from './bgoverlay.module.css';

const BGOverlay = ({ ring, overlay }) => {
	return (
		<div className={styles.container}>
			{ring ? <div className={styles.ring}></div> : null}
			{overlay ? <div className={styles.overlay}></div> : null}
		</div>
	);
};

export default BGOverlay;
