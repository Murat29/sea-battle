import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
