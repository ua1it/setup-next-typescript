import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '../components/splash';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/main');
  }, []);

  return <SplashScreen />;
}

export default Home;
