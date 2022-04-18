const tmdbApiConfig = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5a33fe746771b8d7938b9a70363e31b4",
    include_adult: false,
    language: "en-US",
    "vote_count.gte": 30,
  },
};

export default tmdbApiConfig;
