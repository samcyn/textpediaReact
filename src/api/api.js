import axios from "axios";

export default axios.create({
  baseURL: "https://textpedia-api.herokuapp.com/",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Access-Control-Allow-Origin'
  }
});
