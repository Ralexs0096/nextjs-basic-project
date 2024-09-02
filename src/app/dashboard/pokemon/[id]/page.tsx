import { Pokemon } from '@/pokemons/interfaces/pokemon';
import { Metadata } from 'next';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);

  return {
    title: `#${id} - ${name}`,
    description: `${name}'s page`
  };
}

const getPokemon = async (id: string): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache'
  }).then((res) => res.json());

  return pokemon;
};

export default async function PokemonPage({ params: { id } }: Props) {
  const pokemon = await getPokemon(id);

  return <div>{pokemon.name}</div>;
}
