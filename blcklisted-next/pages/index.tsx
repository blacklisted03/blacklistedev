import { Inter } from "next/font/google";
import Button from '../components/Button';
import Header from '../components/Header';

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <>
      <Header />
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-img.jpg)' }}>
        <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50 z-10 relative">
          <h1 className="text-center text-[80px] text-white font-anton uppercase leading-none">Designing A Better <br /> World Today</h1>
          <p className="text-center text-[24px] text-white">Welcome to Next.js World!</p>
        </div>
      </section>
    </>
  );
}