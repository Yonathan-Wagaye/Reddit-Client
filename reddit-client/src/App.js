import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Header from './componets/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
  
      </BrowserRouter>
    </div>
  );
}

export default App;
