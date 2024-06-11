import React from 'react';

const ErrorLayout = ({ children }: { children: React.ReactNode })  => {
    return (
        <div>
            <header>Error Layout Header</header>
            <main>{children}</main>
            <footer>Error Layout Footer</footer>
        </div>
    );
};

export default ErrorLayout;
