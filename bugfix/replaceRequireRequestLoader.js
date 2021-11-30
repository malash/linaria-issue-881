const path = require("path");

const REQUIRE_CSS_REGEX = /^require\("(.*)"\)/;

const outputCssLoader = require.resolve("./outputCssLoader");

module.exports = function ReplaceRequireRequestLoader(source) {
  const lines = source.toString().split("\n");
  const lastLine = lines[lines.length - 1];
  const matched = lastLine.match(REQUIRE_CSS_REGEX);
  if (matched) {
    const cssUrl = matched[1];
    const cssAbsUrl = path.join(this.context, cssUrl);
    lines[
      lines.length - 1
    ] = `require("${cssUrl}!=!${outputCssLoader}?cssPath=${encodeURIComponent(
      cssAbsUrl
    )}!${this.resourcePath}");`;
    const result = lines.join("\n");

    return result;
  }

  return source;
};
