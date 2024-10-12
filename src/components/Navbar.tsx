import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-[50px] flex justify-center items-center w-full bg-rose-600 fixed top-0 left-0 text-white font-semibold gap-4 z-[999999999]'>
      <Link href='/'>HOME</Link>
      <Link href='/about'>ABOUT</Link>
      <Link href='/profile'>PROFILE</Link>
    </div>
  );
};

export default Navbar;
