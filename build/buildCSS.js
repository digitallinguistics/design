const convertLESS = require(`./convertLESS`)
const path        = require(`path`)

const { readFile, writeFile } = require(`fs/promises`)

module.exports = async function buildCSS() {

  const lessPath = path.join(__dirname, `../components/dlx.less`)
  const less     = await readFile(lessPath, `utf8`)
  const css      = await convertLESS(less)
  const cssPath  = path.join(__dirname, `../assets/dlx.css`)

  await writeFile(cssPath, css, `utf8`)

}
