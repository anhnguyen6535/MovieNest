import MovieTheaterForm from "./movieTheaterForm";

export default function EditMovieTheater() {
    return(
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
                model={{name: 'Cineplex', latitude: 51.126507237599576, longitude: -114.08816814422609}}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}