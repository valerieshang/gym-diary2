import React, {useState} from 'react';
import TopMenuContainer from './components/top-menu/Container';
import Home from './pages/home';

function App() {

  return (
    <div>
      {/* Navigation Bar (Top) */}
      <TopMenuContainer />
      
      {/* Content Container (to be navigated when click on "home", "report", and "about me" hyperlink in the future) */}
      <div className="mt-[150px]">
        <Home />
      </div>      
    </div>
  );
}

export default App;
