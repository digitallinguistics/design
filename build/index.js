const buildCSS = require(`./buildCSS`)

void async function build() {
  // ora only provides an ES module export
  const { oraPromise: createSpinner } = await import(`ora`)
  await createSpinner(buildCSS(), `Build CSS`)
}()
