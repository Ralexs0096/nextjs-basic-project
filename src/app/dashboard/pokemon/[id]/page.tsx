import { Pokemon } from '@/pokemons/interfaces/pokemon';

interface Props {
  params: { id: string };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
  }).then((res) => res.json());

  return pokemon;
};

export default async function PokemonPage({ params: { id } }: Props) {
  const pokemon = await getPokemon(id);

  return <div>{JSON.stringify(pokemon)}</div>;
}
