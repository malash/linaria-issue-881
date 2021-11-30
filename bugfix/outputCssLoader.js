const fs = require("fs");
const loaderUtils = require("loader-utils");

module.exports = async function OutputCssLoader() {
  const callback = this.async();

  const { cssPath } = this.getOptions
    ? this.getOptions()
    : loaderUtils.getOptions(this);
  const cssContent = await fs.promises.readFile(cssPath, "utf8");

  callback(null, cssContent);
};
