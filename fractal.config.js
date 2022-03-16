const Fractal = require(`@frctl/fractal`)
const path    = require(`path`)
const Theme   = require(`@frctl/mandelbrot`)

const fractal = Fractal.create()

const theme = Theme({
  favicon: `./favicon.ico`,
  nav:     [`search`, `docs`, `components`],
})

fractal.set(`project.title`, `DLx Component Library`)
fractal.components.set(`path`, path.join(__dirname, `./components`))
fractal.docs.set(`path`, path.join(__dirname, `./pages`))
fractal.web.set(`builder.dest`, path.join(__dirname, `./docs`))
fractal.web.set(`static.path`, path.join(__dirname, `./assets`))
fractal.web.theme(theme)

module.exports = fractal
