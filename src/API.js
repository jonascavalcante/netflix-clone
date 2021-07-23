const API_KEY = "620e259aec6b805e6765004741f2818e";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}api_key=${API_KEY}`);
  const json = await req.json();
  return json;
}

const TmdbRequests = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix Originals",
        items: await basicFetch(`/discover/tv?with_network=123&`)
      },
      {
        slug: "trending",
        title: "Trending Now",
        items: await basicFetch(`/trending/all/week?`)
      },
      {
        slug: "toprated",
        title: "Popular on Netflix",
        items: await basicFetch(`/movie/top_rated?`)
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(`/discover/movie?with_genres=28&`)
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(`/discover/movie?with_genres=35&`)
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(`/discover/movie?with_genres=27&`)
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(`/discover/movie?with_genres=10749&`)
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await basicFetch(`/discover/movie?with_genres=99&`)
      },
    ];
  }
}

export default TmdbRequests;
