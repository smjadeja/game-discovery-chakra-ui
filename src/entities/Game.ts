import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publishers";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  genres: Genre[];
  publishers: Publisher[];
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
  description_raw: string;
}
