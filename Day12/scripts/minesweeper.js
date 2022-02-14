// Logic

export const TILE_STATUSES = {
	HIDDEN: 'hidden',
	MINE: 'mine',
	NUMBER: 'number',
	MARKED: 'marked',
}

export function createBoard(boardSize, numberOfMines) {
	const board = []

	// get the array of random mine positions
	const minePositions = getMinePositions(boardSize, numberOfMines)
	// console.log(minePositions)

	for (let x = 0; x < boardSize; x++) {
		const row = []
		for (let y = 0; y < boardSize; y++) {
			const element = document.createElement('div')
			element.dataset.status = TILE_STATUSES.HIDDEN
			const tile = {
				element,
				x,
				y,
				// check if the current postion has a mine
				mine: minePositions.some(positionMatch.bind(null, { x, y })),

				// get the dataset status
				get status() {
					return element.dataset.status
				},

				//set the data status
				set status(value) {
					this.element.dataset.status = value
				},
			}
			row.push(tile)
		}
		board.push(row)
	}
	// console.log(board)
	return board
}

export function markTile(tile) {
	if (
		tile.status !== TILE_STATUSES.HIDDEN &&
		tile.status !== TILE_STATUSES.MARKED
	)
		return

	if (tile.status === TILE_STATUSES.MARKED) {
		tile.status = TILE_STATUSES.HIDDEN
	} else {
		tile.status = TILE_STATUSES.MARKED
	}
}

function getMinePositions(boardSize, numberOfMines) {
	const positions = []

	/**
	 * add mines == numberOfMines
	 */
	while (positions.length < numberOfMines) {
		const position = {
			x: randomNumber(boardSize),
			y: randomNumber(boardSize),
		}
		// check if the position is already in the array or not
		if (!positions.some((p) => positionMatch(p, position))) {
			positions.push(position)
		}
	}
	return positions
}

function positionMatch(a, b) {
	return a.x === b.x && a.y === b.y
}

function randomNumber(size) {
	return Math.floor(Math.random() * size)
}
