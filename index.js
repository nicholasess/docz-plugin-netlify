const fs = require("fs");
const { createPlugin } = require("docz-core");

module.exports = () =>
  createPlugin({
    onPostBuild: (config) => {
      fs.writeFileSync(`./${config.dest}/_redirects`, '/*    /index.html   200', {
        encoding: 'utf8'
      });
    }
  });
