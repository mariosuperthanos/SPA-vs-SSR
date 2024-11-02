import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the About component
// const DynamicAbout = dynamic(() => import('./about'));

const Index = () => (
  <div>
    <h1>SSR Magician</h1>
    
    <Link href='/about'>
      <button>About</button>
    </Link>
    <Link href='/Robots'>
      <button>Robots</button>
    </Link>
  </div>
);

export default Index;
