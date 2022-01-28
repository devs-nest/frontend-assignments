import React from 'react'
import { GrTask } from 'react-icons/gr'
import { GiFinishLine } from 'react-icons/gi'

export const ModeToggle = ({ select, setSelect }) => {
	return (
		<div className='toogle_button right-6 top-4'>
			<div
				className='cursor-pointer'
				onClick={() => setSelect(!select)}
			>
				{select ? <GiFinishLine /> : <GrTask />}
			</div>
		</div>
	)
}
