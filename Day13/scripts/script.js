import { Minesweeper } from './minesweeper.js'

// inheritance the Minesweeper
class MinesweeperUI extends Minesweeper {
	constructor(
		BOARD_SIZE,
		NUMBER_OF_MINUS,
		{ boardElement, mineLeftCountElement, messageTextElement }
	) {
		super(BOARD_SIZE, NUMBER_OF_MINUS)

		// all DOM elements
		this.boardElement = boardElement
		this.mineLeftCountElement = mineLeftCountElement
		this.messageTextElement = messageTextElement
	}

	updateTilesUI() {
		this.boardTiles.forEach((row) => {
			row.forEach((tile) => {
				this.boardElement.append(tile.element)
				tile.element.addEventListener('click', () => {
					this.revealTile(tile)
					this.checkGameEnd()
				})
				tile.element.addEventListener('contextmenu', (e) => {
					e.preventDefault()
					this.markTile(tile)
					this.listMineLeft()
				})
			})
		})
	}

	listMineLeft() {
		const markTilesCount = this.boardTiles.reduce((count, row) => {
			return (
				count +
				row.filter((tile) => tile.status === this.TILE_STATUSES.MARKED).length
			)
		}, 0)

		this.mineLeftCountElement.textContent =
			this.NUMBER_OF_MINUS - markTilesCount
	}

	checkGameEnd() {
		const win = this.checkWin()
		const lose = this.checkLose()

		if (win || lose) {
			boardElement.addEventListener('click', this.stopProp, { capture: true })
			boardElement.addEventListener('contextmenu', this.stopProp, {
				capture: true,
			})
		}

		if (win) {
			this.messageTextElement.textContent = 'You win'
		}
		if (lose) {
			this.messageTextElement.textContent = 'You lose'
			this.boardTiles.forEach((row) => {
				row.forEach((tile) => {
					// console.log(tile)
					if (tile.TILE_STATUSES === this.TILE_STATUSES.MARKED)
						this.markTile(tile)
					if (tile.mine) this.revealTile(tile)
				})
			})
		}
	}

	stopProp(e) {
		e.stopImmediatePropagation()
	}
}

const BOARD_SIZE = 4
const NUMBER_OF_MINUS = 1

const boardElement = document.querySelector('.board')
const mineLeftCountElement = document.querySelector('[data-mine-count]')
const messageTextElement = document.querySelector('.subtext')

const boardUI = new MinesweeperUI(BOARD_SIZE, NUMBER_OF_MINUS, {
	boardElement,
	mineLeftCountElement,
	messageTextElement,
})
boardUI.updateTilesUI()

boardElement.style.setProperty('--size', BOARD_SIZE)
mineLeftCountElement.textContent = NUMBER_OF_MINUS
