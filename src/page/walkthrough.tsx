import { useRouter } from 'next/router';
import WalkthroughSlider from '@/components/WalkthroughSlider';

const Walkthrough = () => {
  const router = useRouter();
  const handleGetStarted = () => router.push('/form');

  return (
    <div className="walkthrough-page">
      <div className="container">
        <WalkthroughSlider onGetStarted={handleGetStarted} />
      </div>
    </div>
  );
};

export default Walkthrough;