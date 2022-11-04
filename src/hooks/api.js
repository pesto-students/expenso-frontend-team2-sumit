const URL = "http://localhost:5000/";
import axios from "axios";
axios.defaults.withCredentials = true;

export async function useGet(endpoint) {
  try {
    const response = await axios.get(`${URL}${endpoint}`, {
      withCredentials: true,
    });
    const data = response.data;
    return data;
  } catch (error) {
    return error;
  }
}

export async function usePost(endpoint, obj) {
  try {
    const response = await axios.post(`${URL}${endpoint}`, obj);
    console.log("response: ", response);
    if (response.status === 200 || response.status === 201) {
      const data = response.data;
      return { ok: true, data };
    } else {
      return { ok: false, message: response.data.responseText };
    }
  } catch (error) {
    return error.response.request;
  }
}
