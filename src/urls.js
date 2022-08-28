import {API_KEY} from './constants/constants'
export const originals = `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
export const action = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
export const upcoming = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`