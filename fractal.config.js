const Fractal = require(`@frctl/fractal`)
const path    = require(`path`)

const fractal = Fractal.create()

fractal.set(`project.title`, `DLx Component Library`)
fractal.components.set(`path`, path.join(__dirname, `./components`))
fractal.docs.set(`path`, path.join(__dirname, `./pages`))
fractal.web.set(`builder.dest`, path.join(__dirname, `./docs`))
fractal.web.set(`static.path`, path.join(__dirname, `./assets`))

module.exports = fractal
