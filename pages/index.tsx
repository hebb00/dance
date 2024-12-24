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
        <HeroSection/>
      </main>

      <footer>

      </footer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
