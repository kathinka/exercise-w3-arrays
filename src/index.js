const pokemons = [
	"Bulbasaur",
	"Ivysaur",
	"Venusaur",
	"Charmander",
	"Charmeleon",
	"Charizard",
	"Squirtle",
	"Wartortle",
	"Blastoise",
	"Metapod",
	"Weedle",
	"Pikachu",
	"Pidgey"
];

const bigPokemons = [];

const countThem = () => {
	// print out, in a sentence, how many pokemons I have.
	// like: "I have x pokemons!"
	console.log(`I have ${pokemons.length} pokemons`)
};

const orderThem = () => {
	// order the pokemons alphabetically
	console.log(pokemons.sort())
};

const flipThem = () => {
	// reverse the order of the pokemons
	console.log(pokemons.reverse())
};

const makeThemBig = () => {
	// print the pokemons in UPPERCASE letters
	for (let i = 0; i < pokemons.length; i++) {
		let upperArr = pokemons[i].toUpperCase();
		bigPokemons.push(upperArr)
	};
	console.log(bigPokemons)
};

const onlyTheBs = () => {
	// only print the pokemons that starts with B
	for (
		let i = 0; i < pokemons.length; i++) {
		const char = "B";
		if (pokemons[i].startsWith(char)) {
			console.log(pokemons[i])
		}
	}
};

const notTheCs = () => {
	// remove all pokemons that starts with C
	for (let i = pokemons.length - 1; i >= 0; i--) {
		const char = "C";
		if (pokemons[i].startsWith(char)) {
			pokemons.splice(i, 1)
		}
	}
	console.log(pokemons)
};

const nameAndIdThanks = () => {
	// print out name and index of all pokemons
	// like: number x - Squirtle
	for (let i = 0; i < pokemons.length; i++) {
		console.log(`number ${i} - ${pokemons[i]}`);
	}
};

const catchPokemon = name => {
	// add a pokemon with a name of your choice to the list,
	// print the list so you see its there.
	pokemons.push("Pokeface")
	console.log(pokemons)
};

const didICatchIt = name => {
	// check the pokemons to see if a specific pokemon is in the array
	console.log(pokemons.includes('Pokeface'));
};

const addInThirdPlace = () => {
	// add the pokemon "Clefairy" in the third place of the array
	// print the list so you see its there.
	pokemons.splice(2, 0, 'Clefairy');
	console.log(pokemons)
};

// ***BONUS***
const theLongestName = () => {
	// find the pokemon with the longest name
	let longPoke = [];
	let longest = 0;
	let index;
	for (let i = 0; i < pokemons.length; i++) {
		if (pokemons[i].length > longest) {
			longest = pokemons[i].length;
			index = i;
		}
		else {
			i++
		}
	}
	longPoke = pokemons.filter((word) => word.length === longest);
	console.log(`The pokemons with the longest name is ${longest} characters long and is: ${longPoke} `)
};

countThem();
orderThem();
flipThem();
makeThemBig();
onlyTheBs();
notTheCs();
nameAndIdThanks();
catchPokemon();
didICatchIt();
addInThirdPlace();
theLongestName();
