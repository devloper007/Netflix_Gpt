export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const LOGIN_PAGE_COVER =
  "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const USER_LOGO =
  "https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png";
export const NOW_PLAYING_MOVIES_LIST_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES = "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES = "https://api.themoviedb.org/3/movie/upcoming";
export const MOVIE_BY_QUERY = "https://api.themoviedb.org/3/search/movie?query=sholey&include_adult=false&language=en-US&page=1 ";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_API_KEY,
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original/";
