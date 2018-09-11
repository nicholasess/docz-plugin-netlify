# docz-plugin-netlify

This package makes it possible to use netlify with docz
If you provide a different path for the `dist` folder, the plugin will handle it for you.

## How to use it

```js
import doczPluginNetlify from "docz-plugin-netlify";

export default {
  plugins: [doczPluginNetlify()]
};
```