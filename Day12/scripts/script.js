// Display / UI

import { createBoard, markTile } from './minesweeper.js'

const BOARD_SIZE = 4
const NUMBER_OF_MINUS = 2
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINUS)
// console.log(board)

const boardElement = document.querySelector('.board')
const mineLeftCount = document.querySelector('[data-mine-count]')

// add css property to each tile`
board.forEach((row) => {
	row.forEach((tile) => {
		boardElement.append(tile.element)
		tile.element.addEventListener('click', () => {
			// revealTile(board, tile)
			// checkGameEnd(board)
		})
		tile.element.addEventListener('contextmenu', (e) => {
			// prevent default right click menu
			e.preventDefault()
			markTile(tile)
			// listMineLeft()
		})
	})
})

boardElement.style.setProperty('--size', BOARD_SIZE)
mineLeftCount.textContent = NUMBER_OF_MINUS
