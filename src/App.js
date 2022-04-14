import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Sheare/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
      </Routes>
    </div>
  );
}

export default App;
