import React from 'react';
import './styles.css';
// import App from './App';
// import Routes from "./Routes"
import reportWebVitals from './reportWebVitals';
import Home from "./core/Home"
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Home />);

reportWebVitals();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const container = document.getElementById('root');
// const root = createRoot(container);
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <Home />
//   </StrictMode>
// );
// createRoot(document.getElementById('root')).render(<h1>Your App</h1>)
// root.render(<React.StrictMode>
//   <Home />
// </React.StrictMode>);

// reportWebVitals();
