import "./App.css";
import Nav from "./Components/Nav/Nav";
import HowWeDo from "./Views/HowWeDo/HowWeDo";
import Landing from "./Views/Landing/Landing";
import OurProduct from "./Views/OurProduct/OurProduct";
import AreWithUs from "./Views/AreWithUs/AreWithUs";
import Team from "./Views/Team/Team";
import WhatWeDo from "./Views/WhatWeDo/WhatWeDo";
import WhereWeDo from "./Views/WhereWeDo/WhereWeDo";
function App() {
  return (
    <>
      <Nav />
      <Landing />
      <WhatWeDo/>
      <HowWeDo/>
      {/* <WhereWeDo/> */}
      <OurProduct/>
      <Team />
      <AreWithUs/>
    </>
  );
}

export default App;
