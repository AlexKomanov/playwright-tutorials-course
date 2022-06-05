import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Sidebar />
    </Router>
  );
}

export default App;
