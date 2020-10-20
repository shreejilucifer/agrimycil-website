import { AppProps } from 'next/app';
import '../src/styles/reset.css';
import '../src/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
