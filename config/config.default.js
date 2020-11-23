/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592898225443_4066';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.assets = {
    publicPath: '/public/'
  }
  return {
    ...config,
    ...userConfig,
    alinode: {
      // 从 `Node.js 性能平台` 获取对应的接入参数
      appid: '85398',
      secret: '80b864ea6fe977f93603a8ae133a2e84fdc538d4',
    },
    cluster: {
      listen: {
        port: 7001,
        hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
        // path: '/var/run/egg.sock',
      }
    },
    mongoose:{
      client:{
        url:'mongodb://8.129.182.233:27019/test',
        // url:'mongodb://localhost:27017/test',
        options:{}
      }
    },
    security: {
      csrf: {
        enable: false,
      }
   }
  };
};