// import { useState } from "react";
// import Intro from "./components/Intro";
// import MainRoutes from "./components/MainRoutes";
// import VibeLoader from "./components/VibeLoader";
// import Navbar from "./components/Navbar";

// const App = () => {
//   // const [isLoading, setIsLoading] = useState(true);
//   // const [isIntroActive, setIsIntroActive] = useState(false);

//   // if (isLoading) {
//   //   return (
//   //     <VibeLoader
//   //       onComplete={() => {
//   //         setIsLoading(false);
//   //         setIsIntroActive(true); // Jab loader khatam ho jaye, intro page show karein
//   //       }}
//   //     />
//   //   );
//   // }

//   // if (isIntroActive) {
//   //   return <Intro onIntroComplete={() =>
//   //   {
//   //     setIsIntroActive(false)
//   //     setIsLoading(false) // Jab intro khatam ho jaye, home page show karein
//   //   }
//   //   } />;
//   // }

//   return (
//     <div>
//       <Navbar/>
//       <MainRoutes />
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import MainRoutes from "./components/MainRoutes";
import Navbar from "./components/Navbar";

const App = () => {

  // Current login state
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("token")),
  );

  return (
    <div className="min-h-screen bg-creator-bg-butter">

      {/* Navbar */}
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Routes */}
      <MainRoutes
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

    </div>
  );
};

export default App;