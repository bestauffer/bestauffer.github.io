import axios from "axios";
const apiPath = "https://blakes-deno-server.onrender.com/";

const get = (url) => {
  console.log(apiPath + url);
  return axios.get(apiPath + url, );
};
// const del = (url = "", headers = ({} = {})) => {
//   console.log(apiPath + url);
//   return axios.delete(apiPath + url, headers);
// };
// const put = (
//   url = "",
//   body = {},
//   headers = {}
//   // params = {},
//   // otherConfigs = {}
// ) => {
//   // console.log("helo");
//   console.log(apiPath + url);
//   return axios.put(apiPath + url, body, headers);
// };
// axios.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   (err) => {
//     console.log("hel---->", err.response.status);

//     if (err.response.status == 403) {
//       removeData("user");
//       removeData("token");
//       window.location.href = "login";
//       alert("Login session is expired!");
//     } else {
//       return Promise.reject(err);
//     }
//   }
// );

export default {

  get,

};
