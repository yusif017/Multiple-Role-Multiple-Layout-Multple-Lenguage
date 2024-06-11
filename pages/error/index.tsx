import React from 'react';
import { NextPageWithLayout } from 'next';
import { LayoutType } from '@/enum/layout';
const ErrorPage: NextPageWithLayout = () => {

    return <div>ErrorPage</div>;
};

ErrorPage.layout = LayoutType.Error;


export default ErrorPage;