import AppNavigation from "@/components/AppNavigation";
import ShapeAnimation from "@/components/ShapeAnimation";

export default function Home() {
  return (
    <>
      <ShapeAnimation type="homepage" />

      <section className="content">
        <div className="container">
          <h2>
            Compare your thoughts on <span>technology</span> with current
            industry opinions.
          </h2>
        </div>
      </section>

      <AppNavigation path="/walkthrough" />
    </>
  );
}
