const fs = require("fs");
const { createPlugin } = require("docz-core");

module.exports = (dest = '.docz/dist') =>
  createPlugin({
    onPostBuild: () => {
      fs.writeFileSync(`./${dest}/_redirects`, '/*    /index.html   200', {
        encoding: 'utf8'
      });
    }
  });
