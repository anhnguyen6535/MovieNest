import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movieTheaters/movieTheaters.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {

    const nonSelectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}, {id: 2, name: 'Drama'}]
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'University Cineplex'}, {id: 2, name: 'Creson Height Cineplex'}]
    return<>
        <h3>Create Movie</h3>
        <MovieForm model={{title: '', inTheaters: false, trailer: ''}} onSubmit={val => console.log(val)}
            nonSelectedGenres={nonSelectedGenres} 
            selectedGenres={[]}
            nonSelectedMovieTheaters={nonSelectedMovieTheaters} 
            selectedMovieTheaters={[]}
            selectedActors={[]}
        />
    </>
}