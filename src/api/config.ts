import { API_URL } from "../config";

const hostUrl = API_URL;

export const defaultConfig: Config = {
  api: {
    authUrl: `${hostUrl}/api/v1/auth`,
    userUrl: `${hostUrl}/api/v1/admin`,
  },
  msAlertDisplayTime: "2000",
  storage: {
    defaultStorageLimit: "50",
    orderBookSideLimit: "25",
  },
  sentryEnabled: true,
  withCredentials: false,
};

export const Cryptobase = {
  config: defaultConfig,
};

Cryptobase.config = { ...defaultConfig, ...window.env };
Cryptobase.config.storage = {
  ...defaultConfig.storage,
  ...Cryptobase.config.storage,
};

const convertToBoolean = <T>(value: T): boolean => String(value) === "true";
export const authUrl = () => Cryptobase.config.api.authUrl;
export const userUrl = () => Cryptobase.config.api.userUrl;
export const msAlertDisplayTime = () => Cryptobase.config.msAlertDisplayTime;
export const sentryEnabled = () =>
  convertToBoolean(Cryptobase.config.sentryEnabled);
export const withCredentials = () =>
  convertToBoolean(Cryptobase.config.withCredentials);
