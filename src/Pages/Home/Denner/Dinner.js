import React from 'react';
import { useNavigate } from 'react-router-dom';
import dinner1 from '../../../images/dinner/dinner1.png';
import dinner2 from '../../../images/dinner/dinner2.png';
import dinner3 from '../../../images/dinner/dinner3.png';
import dinner4 from '../../../images/dinner/dinner4.png';
import dinner5 from '../../../images/dinner/dinner5.png';
import dinner6 from '../../../images/dinner/dinner6.png';
import Shef from '../../Sheare/Shef/Shef';
import Home from '../Home/Home';

const Dinner = () => {
    const dinners = [
        {id: 1, img: dinner1, name:'Bangel and cream chess', price:6.99, },
        {id: 2, img: dinner2, name:'BreakFast Sandwich', price:9.99, },
        {id: 3, img: dinner3, name:'Chicken', price:10.99, },
        {id: 4, img: dinner4, name:'Egg BreakFast', price:6.99, },
        {id: 5, img: dinner5, name:'Toast Fired Egg', price:19.99, },
        {id: 6, img: dinner6, name:'Full BreakFast fired Egg Toast Brunch', price:3.99, }
    ];
    const navigate = useNavigate();

    return (
    
            <div>
                <Home></Home>
                <div className='grid grid-cols-3 '>
                    {dinners.map(dinner => <TodayDinner dinner={dinner} key={dinner.id}></TodayDinner>)}
                </div>
               <div className='text-center'>
               <button onClick={() => navigate('/dinnerdetail')} className='border py-4 px-7 bg-blue-600 text-white font-bold mb-12 text-xl'>CheckOut your Food</button>
               </div>
               <Shef></Shef>
            </div>
    );
};
const TodayDinner = ({dinner}) =>{
    const {img, name, price } = dinner;
    return(
        <div className='m-6 text-center w-3/4 mx-auto hover:shadow-2xl p-4'>   
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default Dinner;