import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakFast from './Pages/Home/BreakFast/BreakFast';
import Header from './Pages/Sheare/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>
      </Routes>
    </div>
  );
}

export default App;
