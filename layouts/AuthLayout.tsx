import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode })  => {
    return (
        <div>
            <header>Auth Layout Header</header>
            <main>{children}</main>
            <footer>Auth Layout Footer</footer>
        </div>
    );
};

export default AuthLayout;
