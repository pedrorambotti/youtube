import axios from "axios";

const KEY = "AIzaSyDdqFkQDAHS8rta_4-GzIWXtxkjxLZ1mHY ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
