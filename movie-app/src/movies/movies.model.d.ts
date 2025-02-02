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