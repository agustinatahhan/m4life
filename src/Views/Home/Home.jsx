import Landing from "../Landing/Landing";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
// import HowWeDo from "../HowWeDo/HowWeDo";
import Problem from "../Problem/Problem";
import OurSolution from "../OurSolution/OurSolution";
import Team from "../Team/Team";
import AreWithUs from "../AreWithUs/AreWithUs";
import Trials from "../Trials/Trials";
// import Phrase from "../Phrase/Phrase";
// import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
    <Landing />
      <WhatWeDo/>
      <Problem/>
      {/* <HowWeDo/> */}
      {/* <WhereWeDo/> */}
      <OurSolution/>
      {/* <Phrase/> */}
      <Trials/>
      <Team />
      <AreWithUs/>
      {/* <Footer/> */}
    </>
  )
}

export default Home;