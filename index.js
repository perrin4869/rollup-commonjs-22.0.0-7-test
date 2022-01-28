import { rollup } from "rollup";
import commonjs from "@rollup/plugin-commonjs";

const config = {
  plugins: [
    {
      load(id) {
        console.log('Loading', JSON.stringify(id));
        return null;
      }
    },
    commonjs({ include: /node_modules/ }),
  ],
};

await rollup({
  ...config,
  input: "foo.js",
});

await rollup({
  ...config,
  input: "bar.js",
});
