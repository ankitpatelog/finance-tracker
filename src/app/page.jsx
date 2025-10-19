import Header from "./components/header";
import LandingPage from "./components/landingpage";
import ImageCarousel from "./components/carousel";
import Footer from "./components/foooter";


export default function Home() {
  return (
    <main>
      <Header/>
      <LandingPage/>
      <ImageCarousel/>
      <Footer/>
    </main>
  );
}
