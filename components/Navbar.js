import React, { useState } from 'react'
import { FinalTaskElement } from './FinalTaskElement';

export const Navbar = ({ showFinalFrom }) => {
	const [checked, setChecked] = useState(false);

	return (
		<div className='mx-4 my-2'>
			{checked && showFinalFrom && <FinalTaskElement title={'Navbar'} imgUrl='./navbar.png' />}
			<div className='flex items-center justify-center'>
				<div className='text-xl'>Site Logo </div>
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
			<ul className='list-disc list-outside ml-10 tex'>
				<li>Menu</li>
				<li>Happy Meal</li>
				<li>Restaurants</li>
				<li>News</li>
			</ul>
		</div>
	)
}
