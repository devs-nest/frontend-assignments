export class Minesweeper {
	constructor(BOARD_SIZE, NUMBER_OF_MINUS) {
		// variables
		this.BOARD_SIZE = BOARD_SIZE
		this.NUMBER_OF_MINUS = NUMBER_OF_MINUS
		this.TILE_STATUSES = {
			HIDDEN: 'hidden',
			MINE: 'mine',
			NUMBER: 'number',
			MARKED: 'marked',
		}
		this.boardTiles = []
		this.minePositions = []

		// self starting functions
		this.addMinePositions()
		this.createBoard()
	}

	// all main functions

	// 1.1 - add mines in random locations
	addMinePositions() {
		while (this.minePositions.length < this.NUMBER_OF_MINUS) {
			const position = {
				x: this.randomNumber(),
				y: this.randomNumber(),
			}

			if (!this.minePositions.some((p) => this.positionMatch(p, position))) {
				this.minePositions.push(position)
			}
		}
	}

	// 1. 2 - for create the board
	createBoard() {
		for (let x = 0; x < this.BOARD_SIZE; x++) {
			const row = []
			for (let y = 0; y < this.BOARD_SIZE; y++) {
				const element = document.createElement('div')
				element.dataset.status = this.TILE_STATUSES.HIDDEN
				const tile = {
					element,
					x,
					y,
					mine: this.minePositions.some((p) => this.positionMatch(p, { x, y })),
					get status() {
						return element.dataset.status
					},
					set status(value) {
						this.element.dataset.status = value
					},
				}
				row.push(tile)
			}
			this.boardTiles.push(row)
		}
	}

	// 1.3 - right click mark funtion
	markTile(tile) {
		if (
			tile.status !== this.TILE_STATUSES.HIDDEN &&
			tile.status !== this.TILE_STATUSES.MARKED
		)
			return

		if (tile.status === this.TILE_STATUSES.MARKED) {
			tile.status = this.TILE_STATUSES.HIDDEN
		} else {
			tile.status = this.TILE_STATUSES.MARKED
		}
	}

	// 1.3 - left click reveal tiles
	revealTile(tile) {
		if (tile.status !== this.TILE_STATUSES.HIDDEN) {
			return
		}

		if (tile.mine) {
			// game over
			tile.status = this.TILE_STATUSES.MINE
			return
		}

		tile.status = this.TILE_STATUSES.NUMBER

		const adjacentTiles = this.nearbyTiles(tile)

		const mines = adjacentTiles.filter((tile) => tile.mine)

		if (mines.length === 0) {
			// recursion to find adjacentTiles
			adjacentTiles.forEach((p) => this.revealTile(p))
		} else {
			tile.element.textContent = mines.length
		}
	}

	// all helper functions

	randomNumber() {
		return Math.floor(Math.random() * this.BOARD_SIZE)
	}

	positionMatch(a, b) {
		return a.x === b.x && a.y === b.y
	}

	nearbyTiles({ x, y }) {
		const tiles = []
		for (let xOffset = -1; xOffset <= 1; xOffset++) {
			for (let yOffset = -1; yOffset <= 1; yOffset++) {
				const tile = this.boardTiles[x + xOffset]?.[y + yOffset]
				if (tile) tiles.push(tile)
			}
		}
		return tiles
	}

	checkWin() {
		return this.boardTiles.every((row) => {
			return row.every((tile) => {
				return (
					tile.status === this.TILE_STATUSES.NUMBER ||
					(tile.mine &&
						(tile.status === this.TILE_STATUSES.HIDDEN ||
							tile.status === this.TILE_STATUSES.MARKED))
				)
			})
		})
	}

	checkLose() {
		return this.boardTiles.some((row) => {
			return row.some((tile) => {
				return tile.status === this.TILE_STATUSES.MINE
			})
		})
	}
}
