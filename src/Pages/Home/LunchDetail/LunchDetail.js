import React, { useState } from 'react';
import lunch1 from '../../../images/lunch/lunch1.png';
import lunch2 from '../../../images/lunch/lunch2.png';
import lunch3 from '../../../images/lunch/lunch3.png';
import lunch4 from '../../../images/lunch/lunch4.png';
import lunch5 from '../../../images/lunch/lunch5.png';
import lunch6 from '../../../images/lunch/lunch6.png';


const LunchDetail = () => {
    const images = [
        lunch1,
        lunch2,
        lunch3,
        lunch4,
        lunch5,
        lunch6,
        
     ];
    const lunchs = [
        {id: 1, img: lunch1, name:'Bangel and cream chess', price:6.99, },
        {id: 2, img: lunch2, name:'BreakFast Sandwich', price:9.99, },
        {id: 3, img: lunch3, name:'Chicken', price:10.99, },
        {id: 4, img: lunch4, name:'Egg BreakFast', price:6.99, },
        {id: 5, img: lunch5, name:'Toast Fired Egg', price:19.99, },
        {id: 6, img: lunch6, name:'Full BreakFast fired Egg Toast Brunch', price:3.99, }
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
    for (const food of lunchs) {
        total = food.price * count;
    }
    return (
        <div>
            <div className='grid grid-cols-2  w-3/4 mx-auto items-center mt-12'>
                <div>
                    <h2 className='text-6xl'>Light Lunch</h2>
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
                    {/* <img className='hover:shadow-2xl rounded-full ml-12' src={lunch5} alt="" /> */}
                    <img className='hover:shadow-2xl rounded-full' src={images[index]} alt="" />
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

export default LunchDetail;