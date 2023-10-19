import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  const [isDocumentReady, setIsDocumentReady] = useState(false);

  useEffect(() => {
    // Simulate document ready event
    setTimeout(() => {
      setIsDocumentReady(true);
    }, 1500);
  }, []);
  return (
    <>
      <div className={`loading-screen ${isDocumentReady ? "fade-out" : ""}`}>
        {isDocumentReady ? (
          <div className="content">
            <Navbar />

            <div className="mt-5">
              <Outlet />
            </div>
          </div>
        ) : (
          <div className="loader">
            <i className="fa fa-spinner fa-spin fa-5x text-white"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;










// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";

// const Layout = () => {
//   const [isDocumentReady, setIsDocumentReady] = useState(false);
//   const [isLoadEventFired, setIsLoadEventFired] = useState(false);

//   useEffect(() => {
//     const handleLoad = () => {
//       setIsLoadEventFired(true);
//       setIsDocumentReady(true);
//     };

//     if (document.readyState === "complete") {
//       setIsLoadEventFired(true);
//       setIsDocumentReady(true);
//     } else {
//       window.addEventListener("load", handleLoad);
//     }

//     return () => {
//       window.removeEventListener("load", handleLoad);
//     };
//   }, []);

//   return (
//     <>
//       <div className={`loading-screen ${isLoadEventFired ? "fade-out" : ""}`}>
//         {isDocumentReady ? (
//           <div className="content">
//             <Navbar />

//             <div className="mt-5">
//               <Outlet />
//             </div>
//           </div>
//         ) : (
//           <div className="loader">
//             <i className="fa fa-spinner fa-spin fa-5x text-white"></i>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Layout;
