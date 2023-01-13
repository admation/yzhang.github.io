import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Resume from './pages/resume';
import HomePage from './pages';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />}/>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
