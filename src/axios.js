import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-bb26a/us-central1/api"// the api (cloud function) url
    //'http://localhost:5001/clone-bb26a/us-central1/api'
});

export default instance;