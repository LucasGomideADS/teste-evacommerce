import axios from "axios";

const api = axios.create({
    baseURL: "https://www.eva-test-api.plataformaeva.com"
})

export default api;