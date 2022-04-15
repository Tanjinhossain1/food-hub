import React, { useState } from 'react';
import breakFast from '../../../images/breakfast/breakfast1.png';
import breakFast1 from '../../../images/breakfast/breakfast2.png';
import breakFast3 from '../../../images/breakfast/breakfast3.png';
import breakFast4 from '../../../images/breakfast/breakfast4.png';
import breakFast5 from '../../../images/breakfast/breakfast5.png';
import breakFast6 from '../../../images/breakfast/breakfast6.png';


const BuyBreakFast = () => {
    const breakFasts = [
        { id: 1, img: breakFast, name: 'Bangel and cream chess', price: 6.99, },
        { id: 2, img: breakFast1, name: 'BreakFast Sandwich', price: 9.99, },
        { id: 3, img: breakFast3, name: 'Chicken', price: 10.99, },
        { id: 4, img: breakFast4, name: 'Egg BreakFast', price: 6.99, },
        { id: 5, img: breakFast5, name: 'Toast Fired Egg', price: 19.99, },
        { id: 6, img: breakFast6, name: 'Full BreakFast fired Egg Toast Brunch', price: 3.99, }
    ];

    return (
        <div className='w-3/4 mx-auto mt-12'>
            <div>
                <div>
                    <h1 className='text-4xl'>Your Delevery Details</h1>
                    <div className='grid lg:grid-cols-2'>
                        <form className='mt-6'>
                            <input className='block p-4 border w-[500px] mt-4' type="text" name="address" placeholder='address' id="" />
                            <input className='block p-4 border w-[500px] mt-4' type="text" name="rod no" placeholder='Rod No' id="" />
                            <input className='block p-4 border w-[500px] mt-4' type="text" name="flat no" placeholder='Flat no' id="" />

                            <input className='block p-4 bg-pink-600 text-white font-semibold text-2xl border w-[500px] mt-4' type="submit" name="flat no" value='Submit' id="" />
                        </form>
                        <div>
                            {
                                breakFasts.map(breakFast => <BreakFastBuy breakFast={breakFast} key={breakFast.id}></BreakFastBuy>)
                            }
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};
const BreakFastBuy = ({ breakFast }) => {
    const [count, setCount] = useState(0);


    const { name, img, price } = breakFast;
    return (
        <div>
            <div className='border rounded-xl m-2 p-4 bg-gray-100 flex items-center'>
                <img width={200} src={img} alt="" />
                <div className='ml-4 flex'>
                    <div>
                        <h2 className='text-2xl'>{name}</h2>
                        <p>{(price * count).toFixed(2)}</p>
                    </div>
                    <div className='flex items-center text-3xl'>
                        <button disabled={!count} onClick={() => setCount(count - 1)} className='ml-12 mr-4 text-2xl'>-</button>
                        <p>{count}</p>
                        <button onClick={() => setCount(count + 1)} className='ml-4'>+</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BuyBreakFast;