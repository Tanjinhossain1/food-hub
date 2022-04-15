import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakFast from './Pages/Home/BreakFast/BreakFast';
import BreakFastDetail from './Pages/Home/BreakFastDetail/BreakFastDetail';
import Dinner from './Pages/Home/Denner/Dinner';
import DinnerDetail from './Pages/Home/DinnerDetail/DinnerDetail';
import Home from './Pages/Home/Home/Home';
import Lunch from './Pages/Home/Lunch/Lunch';
import LunchDetail from './Pages/Home/LunchDetail/LunchDetail';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Sheare/Footer/Footer';
import Header from './Pages/Sheare/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<BreakFast></BreakFast>}></Route>
        <Route path='/home' element={<BreakFast></BreakFast>}></Route>

        <Route path='/breakfast' element={<BreakFast></BreakFast>}></Route>


        <Route path='/breakfastdetail' element={
          <RequireAuth>
            <BreakFastDetail></BreakFastDetail>
          </RequireAuth>
        }></Route>

        <Route path='/lunch' element={<Lunch></Lunch>}></Route>
        <Route path='/lunchdetail' element={
          <RequireAuth>
            <LunchDetail></LunchDetail>
          </RequireAuth>
        }></Route>
        <Route path='/dinner' element={<Dinner></Dinner>}></Route>
        <Route path='/dinnerdetail' element={
          <RequireAuth>
            <DinnerDetail></DinnerDetail>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
