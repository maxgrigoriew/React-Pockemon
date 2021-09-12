/** @format */

import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import PokemonCard from '../PokemonCard';
// import styles from './style.module.css';
import bg1 from '../../bg1.jpg'

const POKEMONS = [
	{
		abilities: ['keen-eye', 'tangled-feet', 'big-pecks'],
		stats: {
			hp: 63,
			attack: 60,
			defense: 55,
			'special-attack': 50,
			'special-defense': 50,
			speed: 71,
		},
		type: 'flying',
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png',
		name: 'pidgeotto',
		base_experience: 122,
		height: 11,
		id: 17,
		values: {
			top: 'A',
			right: 2,
			bottom: 7,
			left: 5,
		},
	},
	{
		abilities: ['intimidate', 'shed-skin', 'unnerve'],
		stats: {
			hp: 60,
			attack: 95,
			defense: 69,
			'special-attack': 65,
			'special-defense': 79,
			speed: 80,
		},
		type: 'poison',
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png',
		name: 'arbok',
		base_experience: 157,
		height: 35,
		id: 24,
		values: {
			top: 5,
			right: 9,
			bottom: 'A',
			left: 'A',
		},
	},
	{
		abilities: ['static', 'lightning-rod'],
		stats: {
			hp: 35,
			attack: 55,
			defense: 40,
			'special-attack': 50,
			'special-defense': 50,
			speed: 90,
		},
		type: 'electric',
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
		name: 'pikachu',
		base_experience: 112,
		height: 4,
		id: 25,
		values: {
			top: 8,
			right: 'A',
			bottom: 9,
			left: 6,
		},
	},
	{
		abilities: ['overgrow', 'chlorophyll'],
		stats: {
			hp: 45,
			attack: 49,
			defense: 49,
			'special-attack': 65,
			'special-defense': 65,
			speed: 45,
		},
		type: 'grass',
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
		name: 'bulbasaur',
		base_experience: 64,
		height: 7,
		id: 1,
		values: {
			top: 8,
			right: 4,
			bottom: 2,
			left: 7,
		},
	},
	{
		abilities: ['blaze', 'solar-power'],
		stats: {
			hp: 39,
			attack: 52,
			defense: 43,
			'special-attack': 60,
			'special-defense': 50,
			speed: 65,
		},
		type: 'fire',
		img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
		name: 'charmander',
		base_experience: 62,
		height: 6,
		id: 4,
		values: {
			top: 7,
			right: 6,
			bottom: 1,
			left: 4,
		},
	},
];

const App = () => {
	return (
		<div>
			<Header title='This is title' description='This is Description=)' />
			<Layout color='red' title='This is title' urlBg={bg1}>
				<p>
					In the game two players face off against one another, one
					side playing as "blue", the other as "red" on a 3x3 grid.
					Each player has five cards in a hand and the aim is to
					capture the opponent's cards by turning them into the
					player's own color of red or blue.
				</p>
				<p>
					To win, a majority of the total ten cards played (including
					the one card that is not placed on the board) must be of the
					player's card color. To do this, the player must capture
					cards by placing a card adjacent to an opponent's card
					whereupon the 'ranks' of the sides where the two cards touch
					will be compared. If the rank of the opponent's card is
					higher than the player's card, the player's card will be
					captured and turned into the opponent's color. If the
					player's rank is higher, the opponent's card will be
					captured and changed into the player's color instead.
				</p>
			</Layout>
			<Layout title='This is title' colorBg='red'>
				<div className='flex'>
					{POKEMONS.map((item, index) => (
						<PokemonCard key={index} {...item} />
					))}
				</div>
			</Layout>
			<Layout
				title='This is title'
				description='This is Description'
				urlBg={bg1}>
				<div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsa, recusandae error vitae sint suscipit aliquam nihil aperiam consequatur ut reprehenderit temporibus reiciendis id similique quisquam impedit in praesentium soluta!
				Laborum, tenetur saepe? Quae magni eum iure nobis laudantium molestiae eligendi iste explicabo deserunt, numquam cupiditate perspiciatis in recusandae odio facilis laboriosam veniam dolor quibusdam tempore asperiores distinctio architecto! Odit.
				Eius, minima accusantium ex perferendis, maiores nisi dolorum dolor repellat dolores blanditiis unde? Pariatur recusandae, dolorum ullam deleniti impedit, incidunt facilis harum totam quidem officia veniam necessitatibus magni ut? Totam?
				Sed dolorem ratione et? Eos reprehenderit corporis porro. Dolor accusamus dolore porro doloribus qui ut fugiat pariatur eligendi enim, eum architecto, soluta sit repudiandae laborum exercitationem vitae error nostrum ipsam.
				Aspernatur eos, blanditiis quam incidunt sequi ex earum odio porro laborum voluptate nisi omnis voluptatum ut necessitatibus soluta tempora magni aperiam, molestias modi natus accusamus distinctio corporis? Eligendi, soluta reiciendis.
				Delectus, dolorum, earum nulla sunt quo qui deleniti sed dolor dolorem quaerat, ea recusandae voluptates. Odit itaque magnam suscipit? Incidunt, repellendus? Itaque, unde perferendis. At aspernatur consequatur commodi quis obcaecati.
				Magni maxime vel illum aperiam, eligendi dicta iste labore beatae, aspernatur non vitae distinctio minus quis explicabo possimus quam id ea laborum. Tempora, repellendus? Vitae porro similique eveniet molestiae unde.
				Iste natus quos blanditiis ea nam eius neque optio reiciendis nostrum nobis itaque aliquid ratione ullam, et error eveniet molestiae commodi aperiam sit. Ipsam voluptas, in commodi sint ullam quas?
				Illum quibusdam minima aliquam! Placeat reiciendis ea ullam eligendi labore ducimus cumque quam dolor! Sunt quo reprehenderit placeat dolorum, vero, error accusantium impedit, dolor in dolorem minus id delectus labore?
				Non alias ipsa, rem minus explicabo molestiae! Inventore, quidem error necessitatibus voluptas excepturi quaerat soluta debitis quia molestias, cumque dolorem accusamus id praesentium, eaque sunt! Sint cupiditate sequi tenetur. Fuga?</div>
				</Layout>
			<Footer />
		</div>
	);
};
export default App;