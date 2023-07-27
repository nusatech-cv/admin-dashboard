declare global {
  interface Config {
    api: {
      authUrl: string;
      userUrl: string;
    };
    msAlertDisplayTime: string;
    storage: {
      defaultStorageLimit: string | number;
      orderBookSideLimit: string | number;
    };
    withCredentials: string | boolean;
    sentryEnabled: string | boolean;
  }

  interface Window {
    env: Config;
  }
}

export {};
