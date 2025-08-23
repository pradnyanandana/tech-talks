import AppNavigation from "@/components/layout/AppNavigation";
import ShapeAnimation from "@/components/features/ShapeAnimation";

const HOMEPAGE_TEXTS = [
  "WA businesses feel confident about future growth",
  "AI cant replace creativity",
  "Sales measure true success",
  "Human connection drives WA business",
  "The primary barrier to digital transformation is financial investment",
] as const;

const Home = () => {
  return (
    <div className="home-page">
      <section className="shape-animation __homepage">
        <div className="container">
          <ShapeAnimation />
          {HOMEPAGE_TEXTS.map((text, index) => (
            <p key={index} className="shape-animation-text">
              {text}
            </p>
          ))}
        </div>
      </section>

      <section className="content">
        <div className="container">
          <h1 className="typography__h2">
            Compare your thoughts on <span>technology</span> with current
            industry opinions.
          </h1>
        </div>
      </section>

      <AppNavigation path="/walkthrough" />
    </div>
  );
};

export default Home;
