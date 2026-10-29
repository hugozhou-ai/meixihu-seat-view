import { defineConfig } from "@tarojs/cli";
import devConfig from "./dev.js";
import prodConfig from "./prod.js";
import { CDN_ASSETS } from "../src/asset-manifest.js";

const configureWebpackChain = (chain) => {
  chain.module
    .rule("esm-fully-specified")
    .test(/\.m?jsx?$/)
    .resolve.set("fullySpecified", false);
};

export default defineConfig(async (merge) => {
  const isH5 = process.env.TARO_ENV === "h5";
  const outRoot = isH5 ? "dist-h5" : "dist";
  const baseConfig = {
    projectName: "theatre-seat-view",
    date: "2026-10-28",
    designWidth: 750,
    deviceRatio: {
      640: 2.34 / 2,
      750: 1,
      375: 2,
      828: 1.81 / 2,
    },
    sourceRoot: "src",
    outputRoot: outRoot,
    plugins: ["@tarojs/plugin-framework-react"],
    defineConstants: {},
    copy: {
      patterns: isH5 ? [
        {
          from: "public/models/stage-actors.bin",
          to: `${outRoot}/${CDN_ASSETS["models/stage-actors.bin"].path}`,
        },
      ] : [],
      options: {},
    },
    framework: "react",
    compiler: {
      type: "webpack5",
      prebundle: {
        enable: false,
      },
    },
    cache: {
      enable: false,
    },
    mini: {
      webpackChain: configureWebpackChain,
      postcss: {
        pxtransform: {
          enable: false,
        },
        cssModules: {
          enable: false,
        },
      },
      miniCssExtractPluginOption: {
        ignoreOrder: true,
      },
    },
    h5: {
      webpackChain: configureWebpackChain,
      publicPath: "./",
      staticDirectory: "static",
      router: {
        mode: "hash",
        customRoutes: {
          "/pages/index/index": "/",
        },
      },
      postcss: {
        pxtransform: {
          enable: false,
        },
        autoprefixer: {
          enable: true,
        },
        cssModules: {
          enable: false,
        },
      },
    },
  };
  if (process.env.NODE_ENV === "development") {
    return merge({}, baseConfig, devConfig);
  }
  return merge({}, baseConfig, prodConfig);
});
