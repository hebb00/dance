import Head from 'next/head';
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <Nav />
      </Head>

      <main>
        <HeroSection />
      </main>

      <footer>

      </footer>


    </div>
  );
}
