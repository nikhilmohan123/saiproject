import React from 'react'
import './App.css';
import Profile from './components/Profile'

function App() {
  return (
    <div className="App">
      <Profile img="22" name="john" company="IBM" job="Developer" email="john123@gmail.com"/>
      <Profile img = "35" name="Bob" company="Google"
       job="Front-end" email="bob321@gmail.com" />
       <Profile img = "42"name="Bomma"
      job="Devops Engineer" company="NTT-Data" email="bomma@gmail.com" />
    </div>
  );
}

export default App;
