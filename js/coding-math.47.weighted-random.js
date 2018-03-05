const getPrize = () => {
	let total = 0
	for (let i = 0; i < prizes.length; i++) {
		total += prizes[i].chance
	}

	let rand = Math.random() * total

	for (let i = 0; i < prizes.length; i++) {
		let prize = prizes[i]

		if (rand < prize.chance) return prize

		rand -= prize.chance
	}
},
prizes = [
	{
		prize: "nothing! :/",
		chance: 8,
		bg: '#fff',
		color: '#3F51B5'
	},
	{
		prize: "a gold piece *.*",
		chance: 5,
		bg: '#fd0',
		color: '#000'
	},
	{
		prize: "a treasure chest 8D",
		chance: 2,
		bg: '#795548',
		color: '#fd0'
	},
	{
		prize: "poison :S",
		chance: 1,
		bg: '#009688',
		color: '#fff'
	},
	{
		prize: "food :P",
		chance: 3,
		bg: '#F44336',
		color: '#fd0'
	}
]

msg.innerHTML = 'Click to find something'

canvas.addEventListener('click', () => {
	let prize = getPrize()

	console.log(`prize:`, prize)

	msg.innerHTML = `You find <strong>${prize.prize}</strong>`
	msg.style.opacity = 1
	msg.style.backgroundColor = prize.bg
	msg.style.color = prize.color

})
