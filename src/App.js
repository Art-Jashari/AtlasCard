// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage';
import { ReqInvite } from './components/Pages/ReqInvite';

function App() {
  return (
    <div className="App">
      <Router> 
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/request-invite' element={<ReqInvite />} />
        </Routes>
      </Router>
     



    </div>
  );
}

export default App;
