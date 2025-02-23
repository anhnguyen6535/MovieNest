import { actorMovieDTO } from "../actors/actor.model";

export interface movieDTO{
    id: number;
    title: string;
    poster: string;
}

// maybe undefined when first load
export interface landingPageDTO{
    inTheaters?: movieDTO[];
    upcomings?: movieDTO[];
}

export interface movieCreationDTO{
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    movieTheatersIds?: number[];
    actors?: actorMovieDTO[];
}