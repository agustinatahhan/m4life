import Landing from "../Landing/Landing";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import HowWeDo from "../HowWeDo/HowWeDo";
import OurProduct from "../OurProduct/OurProduct";
import Team from "../Team/Team";
import AreWithUs from "../AreWithUs/AreWithUs";
// import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
    <Landing />
      <WhatWeDo/>
      <HowWeDo/>
      {/* <WhereWeDo/> */}
      <OurProduct/>
      <Team />
      <AreWithUs/>
      {/* <Footer/> */}
    </>
  )
}

export default Home;