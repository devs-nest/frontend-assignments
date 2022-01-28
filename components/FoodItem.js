import React, { useState } from 'react';
import { FinalTaskElement } from './FinalTaskElement';

export const FoodItem = ({ foodItem, showFinalFrom }) => {
  const {
    title,
    subTitle,
    about,
    size,
    contains,
    calories,
    protein,
    fats,
    carbs,
    ingredients,
    imgUrl
  } = foodItem
  const [checked, setChecked] = useState(false);
  return (
    <div className='relative'>
      {
        checked && showFinalFrom && <FinalTaskElement width={800} title={title} imgUrl={imgUrl} />
      }
      <div className='flex items-center header_with_checkbox' >
        <h2>{title}</h2>
        {showFinalFrom && <>
          <div>
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

      <h4>{subTitle}</h4>
      <p>{about}</p>
      <p>Serving Size : </p>
      <p>{size}</p>
      <p><b>Allergen Warning! Contains: </b></p>
      <p>{contains}</p>
      <p><b>Calories</b></p>
      <p>{calories}</p>
      <p><b>Protein</b></p>
      <p>{protein}</p>
      <p><b>Fats</b></p>
      <p>{fats}</p>
      <p><b>Carbs.</b></p>
      <p>{carbs}</p>
      <p><b>Ingredients</b></p>
      <p>{ingredients}</p>
    </div>
  )
};
