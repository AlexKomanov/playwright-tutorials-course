import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Overview from './pages/Overview';


function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path='/overview' element={<Overview/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
