import React, { useState } from 'react';
import { FinalTaskElement } from './FinalTaskElement';

export const Offers_News = ({ showFinalFrom }) => {
    const [checked, setChecked] = useState(false);
    return (
        <div>
            {checked && showFinalFrom && <FinalTaskElement title={'Offers & News'} imgUrl='./offers_news.png'/>}
            <div className='flex items-center justify-center'>
                <h1>Special Offers & News</h1>
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

            <p>Subscribe now for news, promotions and more delivered right to your inbox.</p>
            <p><b>**Create a From after learning**</b></p>
            <p>Follow us on</p>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Youtube</div>
        </div>
    );
};
