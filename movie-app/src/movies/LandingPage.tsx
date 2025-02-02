import { useEffect, useState } from "react";
import MoviesList from "./MovieList";
import { landingPageDTO } from "./movies.model";

export default function LandingPage() {
    const [movies, setMovies] = useState<landingPageDTO>({});

    useEffect(() =>{
        const timer = setTimeout(() => {
            // this fc is executed after 1s
            setMovies({
                inTheaters: [
                    {
                        id: 1,
                        title: 'Captain America: Brave New World',
                        poster: 'https://m.media-amazon.com/images/M/MV5BNDRjY2E0ZmEtN2QwNi00NTEwLWI3MWItODNkMGYwYWFjNGE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
                    },   
                    {
                        id: 2,
                        title: 'Wicked',
                        poster: 'https://m.media-amazon.com/images/M/MV5BOWMwYjYzYmMtMWQ2Ni00NWUwLTg2MzAtYzkzMDBiZDIwOTMwXkEyXkFqcGc@._V1_.jpg'
                    },   
                    {
                        id: 3,
                        title: 'Sonic The Hedgehog: 3',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMjZjNjE5NDEtOWJjYS00Mjk2LWI1ZDYtOWI1ZWI3MzRjM2UzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
                    },   
                ],
                upcomings: [
                    {
                        id: 1,
                        title: 'Dog Man',
                        poster: 'https://m.media-amazon.com/images/M/MV5BNDQwYWMxMDktZjUwMi00MzE5LTljNTUtZjIzNmNhZTc1ZGJlXkEyXkFqcGc@._V1_.jpg'
                    },   
                    {
                        id: 2,
                        title: 'Snow White',
                        poster: 'https://m.media-amazon.com/images/M/MV5BY2RlZDc3ZjYtYWJlNC00MzFiLTlmMGItYmUzYjY3Mjc1Yzc2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
                    },   
                    {
                        id: 3,
                        title: 'A Minecraft Movie',
                        poster: 'https://m.media-amazon.com/images/M/MV5BZGQzMjVhNzYtZWIyOS00ZmEyLTk1YWEtMjkwZGY1NjAwZjA0XkEyXkFqcGc@._V1_.jpg'
                    },   
                ]
            })
        }, 1000);

        return () => clearTimeout(timer);
    });

    return(
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>Upcoming Releases</h3>
            <MoviesList movies={movies.upcomings} />
        </>
    )
}