import { useRouter } from 'next/router';
import Layout from '@/components/ui/Layout';
import WalkthroughSlider from '@/components/WalkthroughSlider';

export default function Walkthrough() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/form');
  };

  return (
    <Layout title="Juicebox - Walkthrough" showHeader={true}>
      <div className="walkthrough-page">
        <div className="container">
          <WalkthroughSlider onGetStarted={handleGetStarted} />
        </div>
      </div>
    </Layout>
  );
}