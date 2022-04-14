import React, { useState } from 'react';
import breakFast from '../../../images/breakfast/breakfast1.png';
import breakFast1 from '../../../images/breakfast/breakfast2.png';
import breakFast3 from '../../../images/breakfast/breakfast3.png';
import breakFast4 from '../../../images/breakfast/breakfast4.png';
import breakFast5 from '../../../images/breakfast/breakfast5.png';
import breakFast6 from '../../../images/breakfast/breakfast6.png';


const BreakFastDetail = () => {
    const images = [
       breakFast,
       breakFast1,
       breakFast3,
       breakFast4,
       breakFast5,
       breakFast6,
    ];
    const [index, setIndex] = useState(0);
    const next = () => {
        setIndex((i) => (i + 1) % images.length);
    };

    const prev = () => {
        setIndex((i) => (i - 1) % images.length);
    };
    const breakFasts = [
        { id: 1, img: breakFast, name: 'Bangel and cream chess', price: 6.99, },
        { id: 2, img: breakFast1, name: 'BreakFast Sandwich', price: 9.99, },
        { id: 3, img: breakFast3, name: 'Chicken', price: 10.99, },
        { id: 4, img: breakFast4, name: 'Egg BreakFast', price: 6.99, },
        { id: 5, img: breakFast5, name: 'Toast Fired Egg', price: 19.99, },
        { id: 6, img: breakFast6, name: 'Full BreakFast fired Egg Toast Brunch', price: 3.99, }
    ];
    const [count, setCount] = useState(0);
    let total = 0;
    for (const food of breakFasts) {
        total = food.price * count;
    }

    return (
        <div>
            <div className='grid grid-cols-2  w-3/4 mx-auto items-center mt-12'>
                <div>
                    <h2 className='text-6xl'>Light BreakFast</h2>
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
                    <img className='hover:shadow-2xl rounded-full ml-12' src={breakFast4} alt="" />
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


export default BreakFastDetail;