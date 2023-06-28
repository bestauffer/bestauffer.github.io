import axios from "axios";
import { apiPath } from "../config";


const get = (url) => {
  console.log(apiPath + url);
  return axios.get(apiPath + url, );
};


export default {

  get,

};
