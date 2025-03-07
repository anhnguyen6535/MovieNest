import { movieDTO } from "./movies.model";
import styles from "./individualMovie.module.css"

export default function IndividualMovie(props: movieDTO) {
    const buildLink = () => `/movie/${props.id}`
    return(
        <div className={styles.div}>
            <a href={buildLink()}>
               <img alt="poster" src={props.poster} />
            </a>
            <p>
                <a href={buildLink()}>{props.title}</a>
            </p>
        </div>
    )
}