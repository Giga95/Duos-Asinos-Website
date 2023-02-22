module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./css");
  eleventyConfig.addPassthroughCopy("./js");
  eleventyConfig.addPassthroughCopy("./php");
  eleventyConfig.addPassthroughCopy("./img");
  return {
    dir: {
      input: "./",
      output: "public",
    },
  };
};
