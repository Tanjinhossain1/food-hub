import React, { useState } from 'react';
import dinner1 from '../../../images/dinner/dinner1.png';
import dinner2 from '../../../images/dinner/dinner2.png';
import dinner3 from '../../../images/dinner/dinner3.png';
import dinner4 from '../../../images/dinner/dinner4.png';
import dinner5 from '../../../images/dinner/dinner5.png';
import dinner6 from '../../../images/dinner/dinner6.png';

const DinnerDetail = () => {
    const images = [
       dinner1,
       dinner2,
       dinner3,
       dinner4,
       dinner5,
       dinner6,
        
     ];
    const dinners = [
        {id: 1, img: dinner1, name:'Bangel and cream chess', price:6.99, },
        {id: 2, img: dinner2, name:'BreakFast Sandwich', price:9.99, },
        {id: 3, img: dinner3, name:'Chicken', price:10.99, },
        {id: 4, img: dinner4, name:'Egg BreakFast', price:6.99, },
        {id: 5, img: dinner5, name:'Toast Fired Egg', price:19.99, },
        {id: 6, img: dinner6, name:'Full BreakFast fired Egg Toast Brunch', price:3.99, }
    ];
    const [index, setIndex] = useState(0);
    const next = () => {
        setIndex((i) => (i + 1) % images.length);
    };

    const prev = () => {
        setIndex((i) => (i - 1) % images.length);
    };
    const [count, setCount] = useState(0);
    let total = 0;
    for (const food of dinners) {
        total = food.price * count;
    }
    return (
        <div>
            <div className='grid grid-cols-2  w-3/4 mx-auto items-center mt-12'>
                <div>
                    <h2 className='text-6xl'>Light Dinner</h2>
                    <p className='mt-6 '>Gay one the what then she. Demesne mention promise you justice arrived way . Amazing foods are or and increasing to in especially companions acceptance admiration. Outweigh it families distance wandered ye.</p>
                    <div className='flex mt-4'>
                        <div className=' mr-8'>
                            <p>{total.toFixed(2)}</p>
                        </div>
                        <div className='text-xl flex  border w-1/4 rounded-full items-center'>

                            <button disabled={!count} onClick={() => setCount(count - 1)} className='ml-12 mr-4 text-2xl'>-</button>
                            <p>{count}</p>
                            <button onClick={() => setCount(count + 1)} className='ml-4'>+</button>

                        </div>

                    </div>
                </div>
                <div>
                    <img className='hover:shadow-2xl rounded-full ml-12' src={dinner6} alt="" />
                </div>
            </div>
            <div>
                <div className='ml-56 grid grid-cols-3 items-center  w-2/4 '>
                <button disabled={!index} onClick={prev}>&lt;</button>               
                    <img src={images[index]} alt="" />
                    <button onClick={next}>&gt;</button>
                </div>
            </div>
        </div>
    );
};

export default DinnerDetail;