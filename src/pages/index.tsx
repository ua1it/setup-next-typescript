import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/mainpage');
  }, []);

  return null; // 혹은 <LoadingComponent />
}

export default Home;
