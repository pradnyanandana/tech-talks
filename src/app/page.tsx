import AppNavigation from "@/components/layout/AppNavigation";
import ShapeAnimation from "@/components/features/ShapeAnimation";
import HomeContent from "@/components/features/HomeContent";
import HomeTitle from "@/components/features/HomeTitle";

/**
 * Homepage component
 * Features:
 * - Animated shape background
 * - Dynamic content text
 * - Hero title
 * - Navigation to walkthrough
 *
 * Layout:
 * 1. Shape animation section with floating text
 * 2. Main content section with title
 * 3. Bottom navigation
 */
const Home = () => {
  return (
    <>
      {/* Shape animation section with floating text */}
      <section className="shape-animation __homepage">
        <div className="container">
          <ShapeAnimation />
          <HomeContent />
        </div>
      </section>

      {/* Main content section */}
      <section className="content">
        <div className="container">
          <HomeTitle />
        </div>
      </section>

      {/* Navigation to walkthrough */}
      <AppNavigation path="/walkthrough" />
    </>
  );
};

export default Home;
