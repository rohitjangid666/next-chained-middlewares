import Link from 'next/link';

const Navbar = () => {
  return (
    <div
      style={{
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        position: 'fixed',
        color: '#000',
        top: 0,
        left: 0,
        gap: '1rem',
      }}
    >
      <Link href='/'>HOME</Link>
      <Link href='/about'>ABOUT</Link>
    </div>
  );
};

export default Navbar;
