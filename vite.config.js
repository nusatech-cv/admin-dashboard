import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    plugins: [react(), tsconfigPaths(),  EnvironmentPlugin("all")],
    server : {
      port: process.env.VITE_PORT || 5500,
    },
    build: {
      target: "ESNext",
      define: {
        "process.env": {
          VITE_BASE_URL: JSON.stringify(
            process.env.VITE_BASE_URL || "development"
          ),
          VITE_LOGIN_REDIRECT: JSON.stringify(
            process.env.VITE_LOGIN_REDIRECT || "development"
          ),
          VITE_SSL: JSON.stringify(process.env.VITE_SSL || "development"),
          VITE_PORT: JSON.stringify(process.env.VITE_PORT || "development"),
          VITE_MODE: JSON.stringify(process.env.VITE_MODE || "development"),
          VITE_HOST: JSON.stringify(process.env.VITE_HOST || "development"),
        },
      },
    },
  });
};
