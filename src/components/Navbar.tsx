import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='h-[50px] flex justify-center items-center w-full bg-rose-600 fixed top-0 left-0 text-white font-semibold gap-4'>
      <Link href='/'>HOME</Link>
      <Link href='/about'>ABOUT</Link>
    </div>
  );
};

export default Navbar;
