import axios from "axios";
import { useGet, usePost } from "hooks/api";

const axiosParams = {
  baseURL:
    process.env.NODE_ENV === "development" ? "http://localhost:5000/api" : "/",
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get(url, config) {
      axios.get(url, config);
    },
    post(url, body, config) {
      axios.post(url, body, config);
    },
    delete(url, config) {
      axios.delete(url, config);
    },
    put(url, body, config) {
      axios.put(url, body, config);
    },
    patch(url, body, config) {
      axios.patch(url, body, config);
    },
  };
};

export default api(axiosInstance);

async function getTeams() {
  const data = await useGet("teams");

  if (data.status === 200) {
    return { ok: true, teams: data };
  } else {
    return { ok: false, message: data.responseText };
  }
}
