# docz-plugin-netlify

This package makes it possible to use netlify with docz

## How to use it

```js
import doczPluginNetlify from "docz-plugin-netlify";

export default {
  plugins: [doczPluginNetlify()]
};
```

## Parameters

You can pass, as parameters, the dest folder if it's different from `.docz/dist`.

Example:

`doczPluginNetlify('.docz/build')`