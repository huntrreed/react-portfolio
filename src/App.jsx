import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';


// Construct request middleware that will attach the JWT token to every request as an `authorization` header


function App() {
  return (
    <>
      <Header />
      <div className="container">
        {/* Content to go here */}
        <Outlet /> 
      </div>
      <Footer />
    </>
  );
}

export default App;
