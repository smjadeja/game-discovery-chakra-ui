import React from 'react'
import useScreenShots from '../hooks/useScreenShots'
import { Image, SimpleGrid } from '@chakra-ui/react'

interface Props {
  gameId : number
}

const GameScreenShots = ({gameId}:Props) => {

    const {data, isLoading, error} =useScreenShots(gameId)
    if (error) return null

  return (
    <SimpleGrid columns={{base : 1, md : 2}}>
        {data?.results.map(file => <Image key={file.id} src={file.image}/>)}
    </SimpleGrid>
  )
}

export default GameScreenShots;