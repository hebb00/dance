import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
