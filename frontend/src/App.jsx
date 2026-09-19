import { useState } from "react";
import Intro from "./components/Intro";
import MainRoutes from "./components/MainRoutes";
import VibeLoader from "./components/VibeLoader";

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isIntroActive, setIsIntroActive] = useState(false);

  // if (isLoading) {
  //   return (
  //     <VibeLoader
  //       onComplete={() => {
  //         setIsLoading(false);
  //         setIsIntroActive(true); // Jab loader khatam ho jaye, intro page show karein
  //       }}
  //     />
  //   );
  // }

  // if (isIntroActive) {
  //   return <Intro onIntroComplete={() => 
  //   {
  //     setIsIntroActive(false)
  //     setIsLoading(false) // Jab intro khatam ho jaye, home page show karein
  //   }
  //   } />;
  // }

  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;
