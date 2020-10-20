import * as React from 'react';
import Layout from '../src/components/Layout';

interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = () => {
	return <Layout overlay navbarType="back"></Layout>;
};

export default AboutPage;
