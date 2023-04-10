import { Layout } from '@/components/layouts'
import { FavoritePokemons } from '@/components/pokemon';
import { NoFavorites } from '@/components/ui'
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, [])
  

  return (
    <Layout title='Pokemons - Favoritos'>

      {
        favoritesPokemons.length === 0
        ? (<NoFavorites/>)
        :(<FavoritePokemons pokemons={favoritesPokemons} /> )
      }

      
    </Layout>
  )
}

export default FavoritesPage