import "./App.css";
import Nav from "./Components/Nav/Nav";
import Landing from "./Views/Landing/Landing";

import Team from "./Views/Team/Team";
import WhatWeDo from "./Views/WhatWeDo/WhatWeDo";
function App() {
  return (
    <>
      <Nav />
      <Landing />
      <WhatWeDo/>
      <Team />
  
    </>
  );
}

export default App;
