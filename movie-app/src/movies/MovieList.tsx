import IndividualMovie from "./individualMovie";
import { movieDTO } from "./movies.model"
import styles from './MovieList.module.css'
import GenericList from "../utils/GenericList";

export default function MoviesList(props: movieListProps) {
    return(
        <GenericList list={props.movies}>
            <div className={styles.div}>
                {props.movies?.map((movie) => <IndividualMovie {...movie} key={movie.id} />)}
            </div>
        </GenericList>
    )

}

interface movieListProps{
    movies?: movieDTO[];
}