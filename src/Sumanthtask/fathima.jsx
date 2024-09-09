import React from 'react';
import '../Sumanthtask/fathima.css'
import { FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <div className="app">
      <div className="content">
        {/* Your scrollable content goes here */}
      </div>
      <a href="https://wa.me/your-number" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp/>
      </a>
    </div>
  );
}

export default App;