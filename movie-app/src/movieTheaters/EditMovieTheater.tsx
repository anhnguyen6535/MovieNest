import MovieTheaterForm from "./movieTheaterForm";

export default function EditMovieTheater() {
    return(
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name: 'Cineplex'}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}