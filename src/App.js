import './App.css';
import { Home } from './components/Home/Home'
import {
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<Home />} />
      </Routes>

    </div>

  );
}

export default App;
