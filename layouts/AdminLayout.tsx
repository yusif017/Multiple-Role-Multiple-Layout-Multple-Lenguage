import React from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode })  => {
    return (
        <div>
            <header>Admin Layout Header</header>
            <main>{children}</main>
            <footer>Admin Layout Footer</footer>
        </div>
    );
};

export default AdminLayout;
