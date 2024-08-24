import { Inter } from "next/font/google";
import Button from '../components/Button';

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-gray-100">
        <h1 className="text-center text-[52px] text-black font-bold">Hello Nik!</h1>
        <p className="text-center text-[22px] text-black">Welcome to Next.js World!</p>
        <Button label="Click Me" onClick={handleClick} />
      </div>
    </>
  );
}