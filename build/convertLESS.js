const CleanCSS = require(`clean-css`)
const less     = require(`less`)
const path     = require(`path`)

const options = {
  paths: [
    path.join(__dirname, `../components`),
    path.join(__dirname, `../global`),
  ],
}

const minifier = new CleanCSS

/**
 * Converts LESS text to CSS text
 * @param  {String} data The LESS text to convert.
 * @return {Promise<String>}
 */
module.exports = async function convertLESS(data) {
  const { css } = await less.render(data, options)
  const { styles: minifiedCSS } = minifier.minify(css)
  return minifiedCSS
}

