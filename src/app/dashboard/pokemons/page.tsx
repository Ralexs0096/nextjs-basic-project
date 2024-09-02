import PokemonGrid from '@/pokemons/components/PokemonGrid';
import { PokemonsResponse } from '@/pokemons/interfaces/pokemons-response';
import { SimplePokemon } from '@/pokemons/interfaces/simple-pokemon';

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  return data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }));
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-4 text-center">
        Pokemon <small>Static</small> List{' '}
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
