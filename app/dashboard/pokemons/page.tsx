import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: `Listado de pokemons`,
		description: `Página de listado de pokemons`,
	};
}

const getPokemons = async ( limit = 20, offset = 0): Promise<SimplePokemon[]> => {
	const data: PokemonsResponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
	).then((response) => response.json());

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split("/").at(-2)!,
		name: pokemon.name,
	}));

	// throw new Error('Esto es un error que no deberia suceder');

	return pokemons;
};

export default async function PokemonsPage() {
	const pokemons = await getPokemons(151);

	return (
		<div className="p-2 flex flex-col">
			<span className="text-5xl my-2">
				{" "}
				Listado de Pokémons <small>estático</small>
			</span>
			<PokemonGrid pokemons={pokemons} />
			{/* {JSON.stringify(pokemons)} */}
		</div>
	);
}
