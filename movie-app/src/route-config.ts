import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActor from "./actors/IndexActor";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGenres from "./genres/IndexGenres";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import CreateMovieTheater from "./movieTheaters/CreateMovieTheater";
import EditMovieTheater from "./movieTheaters/EditMovieTheater";
import IndexMovieTheaters from "./movieTheaters/IndexMovieTheaters";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
    {path: '/genres', component: IndexGenres},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id', component: EditGenre},

    {path: '/actors', component: IndexActor},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/id', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters},
    {path: '/movietheaters/create', component: CreateMovieTheater},
    {path: '/movietheaters/edit/id', component: EditMovieTheater},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/id', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},
    
    {path: '/', component: LandingPage},
    {path: '*', component: RedirectToLandingPage},
];  

export default routes;