import React, { useState } from 'react';
import { FinalTaskElement } from './FinalTaskElement';

export const Order_Delivery = ({ showFinalFrom }) => {
    const [checked, setChecked] = useState(false);
    // 1365 × 663
    return (
        <div>
            {checked && showFinalFrom && <FinalTaskElement title={'Order & Delivery'} imgUrl='./order_delivery.png'/>}
            <div className='flex items-center justify-center'>
                <h1>Order for Home-Delivered Smiles</h1>
                {showFinalFrom && <>
                    <div className='mr-1 ml-5'>
                        <input
                            type="checkbox"
                            onChange={() => setChecked(!checked)}
                            checked={checked}
                        />

                    </div>
                    <p><b>👈 Click Here</b></p>
                </>
                }
            </div>

            <p><b>We deliver to your doorstep</b></p>
            <p>McDelivery allows you to experience delicious McDonald’s food from the comfort of your sofa at home or cubicle in office. All orders are delivered quickly and efficiently, allowing you the peace of mind to know that smiles-inducing food is never too far.</p>
            <div>Order now</div>
            <p>Now also on:</p>
            <div>
                <div>SWIGGY logo here</div>
                <div>ZOMATO logo here</div>
                <div>MAGICPIN logo here</div>
            </div>
        </div>
    );
};
