import axios from "axios";

export default axios.create({
  baseURL: "https://contacts-api-cubos.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
