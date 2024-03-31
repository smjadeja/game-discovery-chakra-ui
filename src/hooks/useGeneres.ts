import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";
import { CACHE_KEY_GENRES } from "../shared/constant";
import ms from "ms";
import { Genre } from "../entities/Genre";
const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: apiClient.getAll,
    // staleTime: 24 * 60 * 60 * 1000,
    staleTime: ms("24h"),
    initialData: genres,
  });

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
