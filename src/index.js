import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import {  RouterProvider } from "react-router-dom";
import router from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './styles.css';
// import MainLaout from './leaout/MainLaout';

// const App = () => {
//   return (
//     <Router>
//       <Route path="/" component={MainLaout} />
//     </Router>
//   );
// };

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles.css';
// import MainLaout from './leaout/MainLaout';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLaout />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// import React from 'react';
// import { createRoot } from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './styles.css';
// import MainLaout from './leaout/MainLaout';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainLaout />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </Router>
//   );
// };

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
