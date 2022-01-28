import React from 'react';

 
export const FinalTaskElement = ({ title, imgUrl}) => {
    // 1274 × 573
    return (
        <div className='hover_element'>
            <p>👇 We are preparing to cooking - '{title}' Section👇</p>
            <img src={imgUrl} />
        </div>
    );
};
