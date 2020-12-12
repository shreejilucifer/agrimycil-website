import * as React from 'react';
import Layout from '../src/components/Layout';

interface IStoreProps {}

const Store: React.FunctionComponent<IStoreProps> = () => {
	return <Layout overlay navbarType="back"></Layout>;
};

export default Store;
