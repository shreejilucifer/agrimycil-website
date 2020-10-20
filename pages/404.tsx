import * as React from 'react';
import FourOFour from '../src/components/404';
import Layout from '../src/components/Layout';
import Paragraph from '../src/components/Paragraph';
import Title from '../src/components/Title';

interface IFourOFourPageProps {}

const FourOFourPage: React.FunctionComponent<IFourOFourPageProps> = () => {
	return (
		<Layout overlay navbarType="back">
			<Title>OOPS!!</Title>
			<FourOFour style={{ width: '70%' }} />
			<Paragraph maxHeight="10vh" width="70%">
				The page you requested, was not found!
			</Paragraph>
		</Layout>
	);
};

export default FourOFourPage;
