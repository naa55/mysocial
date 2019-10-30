// function that takes a token if not its add to the header or delete

import axios from "axios";

const setAuthToken = token => {
  //checking for token
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
