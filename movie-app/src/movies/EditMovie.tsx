import { actorMovieDTO } from "../actors/actor.model";
import { genreDTO } from "../genres/genres.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
    const nonSelectedGenres: genreDTO[] = [{id: 2, name: 'Drama'}]
    const selectedGenres: genreDTO[] = [{id: 1, name: 'Comedy'}]
    const selectedMovieTheaters: movieTheaterDTO[] = [{id: 2, name: 'Creson Height Cineplex'}]
    const nonSelectedMovieTheaters: movieTheaterDTO[] = [{id: 1, name: 'University Cineplex'}]
    const selectedActors: actorMovieDTO[] = [
        {id: 1, name: 'Cynthia Erivo', character: 'Elphaba Thropp', picture: 'https://imageio.forbes.com/specials-images/imageserve/6734b1a4929e3fc9aa0adbd7/Cynthia-Erivo-plays-Elphaba-in-Wicked/960x0.jpg?format=jpg&width=960'},
    ]
    return<>
        <h3>Edit Movie</h3>
        <MovieForm 
            model={{title: 'Toy Story', inTheaters: true, trailer: 'url', releaseDate: new Date('2019-01-01T00:00:00')}} 
            onSubmit={val => console.log(val)} 
            nonSelectedGenres={nonSelectedGenres} 
            selectedGenres={selectedGenres}    
            nonSelectedMovieTheaters={nonSelectedMovieTheaters} 
            selectedMovieTheaters={selectedMovieTheaters}   
            selectedActors={selectedActors} 
        />
    </>
}