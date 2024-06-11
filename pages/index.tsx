// pages/index.tsx

import React from 'react';
import { NextPageWithLayout } from 'next';
import { LayoutType } from '@/enum/layout';
const HomePage: NextPageWithLayout = () => {

    return <div>user</div>;
};

HomePage.layout = LayoutType.User;


export default HomePage;