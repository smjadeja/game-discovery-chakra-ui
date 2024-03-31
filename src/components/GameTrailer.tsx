import useTrailers from "../hooks/useTrailers"

interface Props {
    gameId : number
}

const GameTrailer = ({gameId} : Props) => {

    const {data, isLoading, error} = useTrailers(gameId);
    

  return (
    <div>GameTrialer</div>
  )
}

export default GameTrailer;