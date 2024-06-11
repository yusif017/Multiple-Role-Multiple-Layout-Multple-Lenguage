import { NextPage } from 'next';

declare module 'next' {
    export type NextPageWithLayout = NextPage & {
        layout?: LayoutType;
        getLayout?: (page: React.ReactElement) => React.ReactNode;
    };
}
