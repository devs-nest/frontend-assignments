const boardElement = document.querySelector('.board')
const mineLeftCount = document.querySelector('[data-mine-count]')

// change the value see the difference
const BOARD_SIZE = 4
const NUMBER_OF_MINUS = 2

// create board array according the BOARD_SIZE x BOARD_SIZE
const board = []
for (let x = 0; x < BOARD_SIZE; x++) {
	const row = []
	for (let y = 0; y < BOARD_SIZE; y++) {
		const element = document.createElement('div')

		// acess the data set, add hidden css styling
		element.dataset.status = 'hidden'

		const tile = {
			element, // html element
			x, // row position
			y, // col postion
		}

		row.push(tile)
	}
	board.push(row)
}

// update the board in DOM
board.forEach((row) => {
	row.forEach((tile) => {
		boardElement.append(tile.element)
	})
})

// update the mines left
mineLeftCount.textContent = NUMBER_OF_MINUS

boardElement.style.setProperty('--size', BOARD_SIZE)
