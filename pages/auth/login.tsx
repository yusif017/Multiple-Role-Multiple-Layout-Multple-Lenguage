import React from 'react';
import { NextPageWithLayout } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage: NextPageWithLayout = () => {
  const [role, setRole] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/admin'); // Redirect to admin page after login
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Role:
          <input
          className='text-black'
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

LoginPage.layout = 'auth';
export default LoginPage;

