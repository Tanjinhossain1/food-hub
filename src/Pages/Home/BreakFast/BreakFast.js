import React from 'react';
import { useNavigate } from 'react-router-dom';
import breakFast from '../../../images/breakfast/breakfast1.png';
import breakFast1 from '../../../images/breakfast/breakfast2.png';
import breakFast3 from '../../../images/breakfast/breakfast3.png';
import breakFast4 from '../../../images/breakfast/breakfast4.png';
import breakFast5 from '../../../images/breakfast/breakfast5.png';
import breakFast6 from '../../../images/breakfast/breakfast6.png';

const BreakFast = () => {
    const breakFasts = [
        {id: 1, img: breakFast, name:'Bangel and cream chess', price:6.99, },
        {id: 2, img: breakFast1, name:'BreakFast Sandwich', price:9.99, },
        {id: 3, img: breakFast3, name:'Chicken', price:10.99, },
        {id: 4, img: breakFast4, name:'Egg BreakFast', price:6.99, },
        {id: 5, img: breakFast5, name:'Toast Fired Egg', price:19.99, },
        {id: 6, img: breakFast6, name:'Full BreakFast fired Egg Toast Brunch', price:3.99, }
    ];
    const navigate = useNavigate();
    return (
        <div>
            <div className='grid grid-cols-3 '>
                {breakFasts.map(breakFast => <TodayBreakFast breakFast={breakFast} key={breakFast.id}></TodayBreakFast>)}
            </div>
           <div className='text-center'>
           <button onClick={() => navigate('/breakfastdetail')} className='border py-4 px-7 bg-blue-600 text-white font-bold mb-12 text-xl'>CheckOut your Food</button>
           </div>
        </div>
    );
};
const TodayBreakFast = ({breakFast}) =>{
    const {img, name, price } = breakFast;
    return(
        <div className='m-6 text-center w-3/4 mx-auto hover:shadow-2xl p-4'>   
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default BreakFast;