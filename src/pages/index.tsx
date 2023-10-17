import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SplashScreen from '@components/splash';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/main');
  }, []);

  return <SplashScreen />;
}

export default Home;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    naver: any;
  }
}
