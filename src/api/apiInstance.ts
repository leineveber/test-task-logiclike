import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const instance = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// by the requirements, I'm not able to use any state managers. however, caching is not state handling. generally, it's okay to use React Context, but it may lead to performance issues
export const apiInstance = setupCache(instance, {
  cacheTakeover: false,
});
