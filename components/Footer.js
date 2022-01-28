import React, { useState } from 'react';
import { FinalTaskElement } from './FinalTaskElement';

export const Footer = ({ showFinalFrom }) => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            {checked && showFinalFrom && <FinalTaskElement title={'Footer'} imgUrl='./footer.png' />}
            <div className='flex items-center justify-center'>
                <p>© 2020-21 McDonald's. All Rights Reserved.</p>
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

            <p>Connaught Plaza Restaurants Private Limited (licensee of McDonald's in North & East India)</p>
            <div>
                <span>FAQ |</span>
                <span>&nbsp;Terms & Conditions |</span>
                <span>&nbsp;Privacy Policy |</span>
                <span>&nbsp;Feedback |</span>
                <span>&nbsp;Careers |</span>
                <span>&nbsp;Contact Us</span>
            </div>
        </div>
    );
};
