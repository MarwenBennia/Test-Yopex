'use client'
import { useRouter } from 'next/navigation';

const Home: React.FC = () => {
  const router = useRouter();

  const redirectToAnotherPage = () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    router.push(`/Result?seed=${encodeURIComponent(name)}`);
  };

  return (
    <main>
      <h1>Random Image Generator</h1>
      <p>Follow the instructions</p>
      <input type="text" id="name" placeholder="write your name" />
      <button onClick={redirectToAnotherPage}>Generate Image</button>
    </main>
  );
};

export default Home;
