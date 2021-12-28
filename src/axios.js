import axios from "axios";

/**base URL to make requests to the movie database */
const instance = axios.create(
    {
        baseURL: "https://api.themoviedb.org",
    }
)

export default instance;