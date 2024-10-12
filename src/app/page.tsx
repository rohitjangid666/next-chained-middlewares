import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  const data = { user: null };

  return (
    <div className='container'>
      <div className='grid place-content-center min-h-screen'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-4xl my-8'>Welcome to NextJS DaisyUI Starter</h1>
          <Link className='btn ' href='/admin'>
            Go to Admin
          </Link>

          {!!data?.user ? (
            <>
              <h2>You are logged in as {data?.user?.email} </h2>

              <button className='btn'>Sign Out</button>
            </>
          ) : (
            <Link className='btn btn-outline' href='/sign-in'>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
