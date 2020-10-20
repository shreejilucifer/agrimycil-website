import * as React from 'react';
import styles from './paragraph.module.css';

interface IParagraphProps {
	maxHeight: string;
	width: string;
}

const Paragraph: React.FunctionComponent<IParagraphProps> = ({
	children,
	maxHeight,
	width,
}) => {
	return (
		<div className={styles.container} style={{ maxHeight: maxHeight, width }}>
			<p className={styles.paragraph}>{children}</p>
		</div>
	);
};

export default Paragraph;
