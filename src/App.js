import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "antd";
import "antd/dist/antd.css";
import Login from './pages/login/login';
import Tabbar from './component/tabbar/tabbar'
function App() {
  return (
    <div className="App">
      <Tabbar />
    </div>
  );
}

export default App;
