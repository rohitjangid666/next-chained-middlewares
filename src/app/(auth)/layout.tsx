const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='py-8'>
      <h1 className='text-center text-5xl font-bold'>Auth Layout</h1>

      {children}
    </div>
  );
};

export default AuthLayout;
