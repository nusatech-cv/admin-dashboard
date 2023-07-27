import type {
  AxiosError,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from "axios";

import { authUrl, userUrl, withCredentials } from "./config";

export type HTTPMethod = "get" | "post" | "delete" | "put" | "patch";

export interface JsonBody {
  [key: string]: any;
}

export interface RequestOptions {
  apiVersion: "auth" | "user";
  withHeaders?: boolean;
  headers?: Object | any;
}

export interface Request {
  method: HTTPMethod;
  url: string;
  body?: JsonBody;
}

export interface ApiVariety {
  auth: string;
  user: string;
  public: string;
}

const getAPI = () => ({
  auth: authUrl(),
  user: userUrl(),
});

const buildRequest = (request: Request, configData: RequestOptions) => {
  const { body, method, url } = request;
  const { apiVersion, headers } = configData;
  const api = getAPI();

  const contentType =
    body instanceof FormData ? "multipart/form-data" : "application/json";

  const defaultHeaders = {
    "content-type": contentType,
  };

  const apiUrl = api[apiVersion];

  const requestConfig: AxiosRequestConfig = {
    baseURL: apiUrl,
    data: body,
    headers: { ...headers, ...defaultHeaders },
    method,
    url,
    withCredentials: withCredentials(),
  };

  return requestConfig;
};

export const defaultResponse: Partial<AxiosError["response"]> = {
  status: 500,
  data: {
    error: "server.internal_error" || "Server error",
  },
};

export const formatError = (responseError: AxiosError) => {
  const response = responseError.response || defaultResponse;
  const errors =
    (response.data && (response.data.message || [response.data.message])) || [];

  return {
    code: response.status,
    message: errors,
  };
};

export const makeRequest = async (
  request: Request,
  configData: RequestOptions
) => {
  const requestConfig = buildRequest(request, configData);

  return new Promise((resolve, reject) => {
    const axiosRequest: AxiosPromise = axios(requestConfig);
    axiosRequest
      .then((response: AxiosResponse) => {
        if (configData.withHeaders) {
          resolve(response);
        } else {
          resolve(response.data);
        }
      })
      .catch((error: AxiosError) => {
        reject(formatError(error));
      });
  });
};
