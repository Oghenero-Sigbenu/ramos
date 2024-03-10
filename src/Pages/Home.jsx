import Explore from "../Components/Explore";
import Hero from "../Components/Hero";
import Layout from "../Components/Layouts";
import Rate from "../Components/Rate";
import Revenue from "../Components/Revenue";
import Widgets from "../Components/Widget";

function Home() {
  return (
    <Layout>
      <Hero />
      <Widgets />
      <Explore />
      <Revenue />
      <Rate />
    </Layout>
  );
}

export default Home;
