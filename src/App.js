import logo from './logo.svg';
import './App.css';
//Standard for React Router Dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Auth} from "./pages/auth/index"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />} />
          <Route path='/' exact element={<Auth />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
