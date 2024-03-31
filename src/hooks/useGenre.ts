import useGenres from "./useGeneres"
const useGenre = (id? : number) => {
    const {data} = useGenres();
    return data?.results.find((genre) => genre.id === id)
}

export default useGenre;