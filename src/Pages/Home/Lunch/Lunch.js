import React from 'react';
import { useNavigate } from 'react-router-dom';
import lunch1 from '../../../images/lunch/lunch1.png';
import lunch2 from '../../../images/lunch/lunch2.png';
import lunch3 from '../../../images/lunch/lunch3.png';
import lunch4 from '../../../images/lunch/lunch4.png';
import lunch5 from '../../../images/lunch/lunch5.png';
import lunch6 from '../../../images/lunch/lunch6.png';
import Shef from '../../Sheare/Shef/Shef';
import Home from '../Home/Home';

const Lunch = () => {
    const lunchs = [
        {id: 1, img: lunch1, name:'Bangel and cream chess', price:6.99, },
        {id: 2, img: lunch2, name:'BreakFast Sandwich', price:9.99, },
        {id: 3, img: lunch3, name:'Chicken', price:10.99, },
        {id: 4, img: lunch4, name:'Egg BreakFast', price:6.99, },
        {id: 5, img: lunch5, name:'Toast Fired Egg', price:19.99, },
        {id: 6, img: lunch6, name:'Full BreakFast fired Egg Toast Brunch', price:3.99, }
    ];
    const navigate = useNavigate();

    return (
    
            <div>
                  <Home></Home>
                <div className='grid grid-cols-3 '>
                    {lunchs.map(lunch => <TodayLunch lunch={lunch} key={lunch.id}></TodayLunch>)}
                </div>
               <div className='text-center'>
               <button onClick={() => navigate('/lunchdetail')} className='border py-4 px-7 bg-blue-600 text-white font-bold mb-12 text-xl'>CheckOut your Food</button>
               </div>
               <Shef></Shef>
            </div>
    );
};
const TodayLunch = ({lunch}) =>{
    const {img, name, price } = lunch;
    return(
        <div className='m-6 text-center w-3/4 mx-auto hover:shadow-2xl p-4'>   
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}
export default Lunch;