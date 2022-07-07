// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";

// import Home from "./core/Home"

// const SrcRoutes = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" exact component={Home} />
//             </Routes>
//         </BrowserRouter>
//     );
// };

// export default SrcRoutes;

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./core/Home"

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );

