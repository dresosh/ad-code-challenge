import axios from "axios";

const apiKeyCat: string =
  "live_yaZAQBQhwg8aFEScpEZpm1UefnIO7oKNd6Z1Gq6qxZzGcIFlUs1sPCN93UQ5dgNT";
const apiKeyDog: string =
  "live_UJHe5jMoRkEefYP4bN0NdAw28R4xspaVAcLMUmarPL4pDidjVeas7VWBvQiMEkkG";

const customAxios = axios.create({
  timeout: 30000,
});

const requestHandler = (request: any) => {
  if (request.url.includes("cat")) {
    request.headers["x-api-key"] = apiKeyCat;
  } else {
    request.headers["x-api-key"] = apiKeyDog;
  }
  return request;
};

const responseHandler = (response: any) => {
  return response.data;
};

const errorHandler = (error: any) => {
  return Promise.reject(
    error?.response?.data?.message || error?.response?.data || error
  );
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

// Step
export default customAxios;
