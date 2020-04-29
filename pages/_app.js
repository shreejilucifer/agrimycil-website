import '../src/styles/reset.css';
import '../src/styles/global.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
